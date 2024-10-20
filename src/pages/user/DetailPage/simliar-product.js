import { FaHeart, FaExchangeAlt } from 'react-icons/fa';
import { memo } from 'react';

const SimilarProducts = () => {
  const products = [
    { id: 1, name: 'Fresh Lime', price: 38, oldPrice: 45, img: '/assets/images/menu-items/pizza-1.png'},
    { id: 2, name: 'Chocolate Muffin', price: 28, img: '/assets/images/menu-items/pizza-1.png' },
    { id: 3, name: 'Burger', price: 21, img: '/assets/images/menu-items/pizza-1.png' },
    { id: 4, name: 'Fresh Lime', price: 38, oldPrice: 45, img: '/assets/images/menu-items/pizza-1.png' },
  ];

  return (
    <div className="container mx-auto py-4 pb-[90px]">
      <h2 className="text-2xl font-bold mb-10" data-aos="fade-up">Sản Phẩm Tương Tự</h2>
      <div className="grid grid-cols-4 gap-10" data-aos="fade-up">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image */}
            <img className="object-cover rounded-md" src={product.img} width={170} height={170} alt={product.name} />

            {/* Overlay with Icons */}
            <div className="absolute mx-12 inset-y-px top-1 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-400 transition">
                <FaHeart className="text-gray-600" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-400 transition">
                <FaExchangeAlt className="text-gray-600" />
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-4 px-4">
              <div className="h-20 flex flex-col justify-between">
                <h3 className="text-l font-bold">{product.name}</h3>
                <div className='flex gap-2'>
                  <div className="text-yellow-600 text-x ">${product.price.toFixed(2)}</div>
                  <div>
                    {product.oldPrice && (
                      <div className="text-gray-500 line-through text-x">${product.oldPrice.toFixed(2)}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(SimilarProducts);
