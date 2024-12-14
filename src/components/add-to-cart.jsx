import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [allSelected, setAllSelected] = useState(false);

    const getUserId = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user ? user.id : null;
    };

    const getCartForUser = (userId) => {
        const allCarts = JSON.parse(localStorage.getItem('cart')) || {};
        return allCarts[userId] || [];
    };

    const saveCartForUser = useCallback((userId, updatedCart) => {
        const allCarts = JSON.parse(localStorage.getItem('cart')) || {};
        allCarts[userId] = updatedCart;
        localStorage.setItem('cart', JSON.stringify(allCarts));
    }, []);

    const saveDiscountForUser = (userId, discount) => {
        const allDiscounts = JSON.parse(localStorage.getItem("discounts")) || {};
        allDiscounts[userId] = discount;
        localStorage.setItem("discounts", JSON.stringify(allDiscounts));
    };

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (newItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.subId === newItem.subId);

            let updatedCart;
            if (existingItem) {
                updatedCart = prevCart.map(item =>
                    item.subId === newItem.subId
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                updatedCart = [...prevCart, { ...newItem, selected: false }];
            }

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    useEffect(() => {
        const userIdFromStorage = getUserId();
        setUserId(userIdFromStorage);

        if (userIdFromStorage) {
            const userCart = getCartForUser(userIdFromStorage);
            setCart(userCart);

            const savedDiscounts = JSON.parse(localStorage.getItem("discounts")) || {};
            setDiscount(savedDiscounts[userIdFromStorage] || null);
        } else {
            setCart([]);
            setDiscount(null);
        }
    }, []);

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (subId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.subId !== subId);

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    // Hàm cập nhật số lượng sản phẩm
    const updateCartItem = (subId, newQuantity, maxQuantity) => {
        if (newQuantity > maxQuantity) {
            return;
        }
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.subId === subId ? { ...item, quantity: newQuantity } : item
            );

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    // hàm giảm giá 
    const applyDiscount = (selectedDiscount) => {
        setDiscount(selectedDiscount);
        saveDiscountForUser(userId, selectedDiscount);

        setCart(prevCart => {
            const updatedCart = prevCart.map(item => ({
                ...item,
                discount: selectedDiscount,
            }));

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    const calculateTotalPrice = (cart, discount) => {
        const selectedItems = cart.filter(item => item.selected);
        let totalPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

        if (discount) {
            if (discount.discount_type === "percent") {
                totalPrice -= totalPrice * (discount.discount / 100);
            } else if (discount.discount_type === "amount") {
                totalPrice = Math.max(totalPrice - discount.discount, 0);
            }
        }

        return totalPrice;
    };

    // Hàm thay đổi trạng thái chọn/ bỏ chọn của một sản phẩm
    const toggleItemSelection = (subId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.subId === subId ? { ...item, selected: !item.selected } : item
            );

            saveCartForUser(userId, updatedCart);

            // Kiểm tra lại trạng thái "Chọn tất cả"
            const allSelected = updatedCart.every(item => item.selected);
            setAllSelected(allSelected);

            return updatedCart;
        });
    };

    // Hàm chọn/ bỏ chọn tất cả sản phẩm
    const toggleAllSelection = () => {
        setAllSelected(prevState => {
            const newAllSelected = !prevState;
            setCart(prevCart =>
                prevCart.map(item => ({ ...item, selected: newAllSelected }))
            );
            return newAllSelected;
        });
    };

    // Xử lý vnpay
    const clearCartAfterPayment = useCallback(() => {
        setCart([]); // Xóa giỏ hàng khỏi trạng thái

        // Lưu giỏ hàng rỗng vào localStorage
        saveCartForUser(userId, []);

        // Phát sự kiện để các tab khác cập nhật
        const event = new CustomEvent('cartUpdated', {
            detail: { userId, updatedCart: [] },
        });
        window.dispatchEvent(event);
    }, [userId, saveCartForUser]);

    const removeItemsAfterPayment = (itemsToRemove) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(
                (item) => !itemsToRemove.some((removedItem) => removedItem.subId === item.subId)
            );

            // Lưu cart mới vào localStorage
            saveCartForUser(userId, updatedCart);

            // Phát sự kiện để các tab khác cập nhật
            const event = new CustomEvent('cartUpdated', {
                detail: { userId, updatedCart },
            });
            window.dispatchEvent(event);

            return updatedCart;
        });
    };

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'cart') {
                const allCarts = JSON.parse(event.newValue || '{}');
                if (userId && allCarts[userId]) {
                    setCart(allCarts[userId]);
                } else {
                    setCart([]);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup khi component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [userId]);

    return (
        <CartContext.Provider
            value={{
                cart,
                discount,
                addToCart,
                updateCartItem,
                removeFromCart,
                allSelected,
                toggleAllSelection,
                toggleItemSelection,
                applyDiscount,
                calculateTotalPrice,
                removeItemsAfterPayment,
                clearCartAfterPayment
            }}
        >
            {children}
        </CartContext.Provider>
    );
};