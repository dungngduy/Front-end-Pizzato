import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from './router';
import './styles/style.scss';
import './index.css';
import { CartProvider } from 'components/add-to-cart';
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <CartProvider>
        <RouterCustom />
      </CartProvider>
    </BrowserRouter>
  </HelmetProvider>
);