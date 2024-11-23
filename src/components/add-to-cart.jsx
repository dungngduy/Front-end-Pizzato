import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(null);

    // Hàm lấy userId từ localStorage
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
                updatedCart = [...prevCart, {...newItem, selected: false}];
            }

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
    };

    // Lấy giỏ hàng từ localStorage khi component được mount
    useEffect(() => {
        const userIdFromStorage = getUserId();
        setUserId(userIdFromStorage);

        if (userIdFromStorage) {
            const userCart = getCartForUser(userIdFromStorage);
            setCart(userCart);
        } else {
            setCart([]);
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
    const updateCartItem = (subId, newQuantity) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.subId === subId ? { ...item, quantity: newQuantity } : item
            );

            saveCartForUser(userId, updatedCart);
            return updatedCart;
        });
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
        <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart, toggleItemSelection, removeItemsAfterPayment }}>
            {children}
        </CartContext.Provider>
    );
};