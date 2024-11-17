import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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
                updatedCart = [...prevCart, newItem];
            }

            // Lưu giỏ hàng đã cập nhật vào localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Lấy giỏ hàng từ localStorage khi component được mount
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (subId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.subId !== subId);

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Hàm cập nhật số lượng sản phẩm
    const updateCartItem = (subId, newQuantity) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.subId === subId ? { ...item, quantity: newQuantity } : item
            );

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};