import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(null);
    const [discount, setDiscount] = useState(null);

    const getUserId = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user ? user.id : null;
    };

    const getCartForUser = (userId) => {
        const allCarts = JSON.parse(localStorage.getItem('cart')) || {};
        return allCarts[userId] || [];
    };

    const saveCartForUser = (userId, updatedCart) => {
        const allCarts = JSON.parse(localStorage.getItem('cart')) || {};
        allCarts[userId] = updatedCart;
        localStorage.setItem('cart', JSON.stringify(allCarts));
    };

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

    const toggleItemSelection = (subId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.subId === subId ? { ...item, selected: !item.selected } : item
            );
            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    const removeItemsAfterPayment = (itemsToRemove) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(
                (item) => !itemsToRemove.some((removedItem) => removedItem.subId === item.subId)
            );

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                discount,
                addToCart,
                updateCartItem,
                removeFromCart,
                toggleItemSelection,
                applyDiscount,
                calculateTotalPrice,
                removeItemsAfterPayment,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};