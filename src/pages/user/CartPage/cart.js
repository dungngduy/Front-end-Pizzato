import React, { useState } from 'react';

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <tr className="border-b " style={{ width: '1200px' }} >
      <td className="flex items-center p-5">
        <img src={product.image} alt={product.name} className=" object-cover mr-4 w-20 h-26 " />
        <div>
          <p>{product.name}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</span> {/* Thêm hệ thống rating */}
          </div>
        </div>
      </td>
      <td className="text-center p-6 ">${product.price.toFixed(2)}</td>
      <td className='w-[120px] p-6' >
        <td className="flex items-center justify-center border rounded-full">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 text-black rounded-full  flex items-center justify-center">
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="w-8 h-8 text-black rounded-full flex items-center justify-center">
            +
          </button>
      </td>
      </td>
      <td className="text-center p-4">${(product.price * quantity).toFixed(2)}</td>
      <td className="text-center p-4">
        <button className="text-red-500 hover:text-red-700">✖</button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const products = [
    {
      name: 'Burger',
      price: 35,
      quantity: 1,
      image: '/assets/images/menu-items/pizza-1.png', // Thay thế bằng URL hình ảnh thật
    },
    {
      name: 'Fresh Lime',
      price: 25,
      quantity: 1,
      image: '/assets/images/menu-items/pizza-2.png',
    },
    {
        name: 'Fresh Lime',
        price: 25,
        quantity: 1,
        image: '/assets/images/menu-items/pizza-3.png',
      },
      {
        name: 'Fresh Lime',
        price: 25,
        quantity: 1,
        image: '/assets/images/menu-items/pizza-4.png',
      },
      {
        name: 'Fresh Lime',
        price: 25,
        quantity: 1,
        image: '/assets/images/menu-items/pizza-1.png',
      },{
        name: 'Fresh Lime',
        price: 25,
        quantity: 1,
        image: '/assets/images/menu-items/pizza-2.png',
      },
    // Thêm các sản phẩm khác tương tự...
  ];

  return (
    <div className="container mx-auto p-6 my-10 " style={{ width: '1200px'}}>
      <table className="min-w-full bg-white hover:border-collapse shadow-sm	">
        <thead>
          <tr>
            <th className="text-left p-4 px-10">Product</th>
            <th className="text-center p-4">Price</th>
            <th className="text-center p-4">Quantity</th>
            <th className="text-center p-4">Total</th>
            <th className="text-center p-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
