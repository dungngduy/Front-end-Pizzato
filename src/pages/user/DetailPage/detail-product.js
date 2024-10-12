import { memo, useState } from 'react';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaPinterestP } from 'react-icons/fa';
const DetailProduct = () => {
  const [selectedImage, setSelectedImage] = useState("/assets/images/pizza-choose.jpeg");
  const [activeTab, setActiveTab] = useState("description");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <div className="container mx-auto p-2 py-[85px] w-full" style={{ width: '1200px' }}>
        {/* Grid Container */}
        <div className="flex gap-10 w-full" style={{ width: '1200px' }}>
          <div className="flex gap-5">
            {/* Image Gallery */}
            <div className="flex">
              <div className="space-y-4">
                {/* Thumbnail Images */}
                <div className="flex flex-col gap-6">
                  {["/assets/images/categories/category-4.jpeg", "/assets/images/products/product-1.jpg", "/assets/images/products/product-1.jpg", "/assets/images/products/product-1.jpg"].map((src, index) => (
                    <img
                      key={index}
                      className="w-[130px] h-[125px] rounded-md cursor-pointer"
                      src={src}
                      alt={`Product ${index + 1}`}
                      onClick={() => handleImageClick(src)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Main Product Image */}
            <div>
              <img className="w-[520px] h-[590px] rounded-lg" src={selectedImage} alt="Main Product" />
            </div>
          </div>

          {/* Product Information */}
          <div style={{ width: '670px' }}>
            <div className="space-y-4">
              {/* Stock Status */}
              <span className="bg-yellow-400 text-white px-2 py-1 rounded">In stock</span>

              {/* Product Title */}
              <h1 className="text-4xl font-bold">Yummy Chicken Chup</h1>

              {/* Product Description */}
              <p className="text-gray-600 text-[17px]" style={{ width: '500px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <div className="mt-14 border-t border-gray-300" style={{ width: '480px' }}></div>

              {/* Product Price */}
              <div className="text-2xl font-semibold text-gray-900">54.00$</div>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-[17px]">★★★★★</span>
                <span className="text-gray-600">5.0 Rating</span>
                <span className="text-gray-500">| 22 Reviews</span>
              </div>
              {/**/}
              <div>
                <p className='text-gray-600 text-[17px]'>Dictum/cursus/Risus</p>
              </div>
              {/* Quantity Selector and Add to Cart */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300">
                  <button className="px-2">-</button>
                  <input
                    className="w-12 text-center outline-none"
                    type="number"
                    defaultValue="1"
                    min="1"
                  />
                  <button className="px-2">+</button>
                </div>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-md">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="mt-20 border-t border-gray-300" style={{ width: '480px' }}></div>
              {/* Wishlist and Compare */}
              <div className="flex space-x-4 text-gray-600">
                <button className="flex items-center">
                  <span>♡</span>
                  <span className="ml-2 text-[17px] ">Add to Wishlist</span>
                </button>
                <button className="flex items-center">
                  <span>⇔</span>
                  <span className="ml-2 text-[17px]">Compare</span>
                </button>
              </div>
              {/* Category and Tags */}
              <div className="text-gray-600 space-y-2">
                <p>Category: <span className="font-semibold text-[17px]">Pizza</span></p>
                <p>Tag: <span className="font-semibold text-[17px]">Our Shop</span></p>
              </div>

              {/* Social Media Share */}
              <div className="flex space-x-4 mt-6">
                <span className='font-semibold text-[17px] text-gray-600'>Share:</span>
                <FaFacebookF className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaTelegramPlane className="cursor-pointer" />
                <FaPinterestP className="cursor-pointer" />
              </div>
            </div>
            <div className="mt-10 border-t border-gray-300" style={{ width: '480px' }}></div>
          </div>
        </div>

        {/*Chọn mô tả sản phẩm hoặc review sản phẩm*/}
        <div data-aos="zoom-in">
          <div className="flex space-x-8 pt-20 text-[17px]">
            <button
              className={`border-b-2 px-4 py-2 ${activeTab === 'description' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('description')}
            >
              Mô tả
            </button>
            <button
              className={`border-b-2 px-4 py-2 ${activeTab === 'reviews' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Đánh giá
            </button>
            <button
              className={`border-b-2 px-4 py-2 ${activeTab === 'comments' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('comments')}
            >
              Bình luận
            </button>
          </div>

          <div className="mt-4 text-gray-600 text-[17px]">
            {activeTab === 'description' && (
              <div className='flex flex-col gap-10'>
                <p data-aos="zoom-in">
                  Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus.
                  Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
                  sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam
                  pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
                  In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                </p>
                <p data-aos="zoom-in">
                  Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est
                  dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa.
                  Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
                  fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non
                  aliquet sem.
                </p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className='flex flex-col gap-10'>
                <p data-aos="zoom-in">Đánh giá</p>
              </div>
            )}
            {activeTab === 'comments' && (
              <div className='flex flex-col gap-10'>
                <p data-aos="zoom-in">Bình luận</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailProduct);
