import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from './router';
import './styles/style.scss';
import './index.css';
import { CartProvider } from 'components/add-to-cart';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* Bọc toàn bộ ứng dụng với CartProvider */}
    <CartProvider>
      <RouterCustom />
    </CartProvider>
  </BrowserRouter>
);