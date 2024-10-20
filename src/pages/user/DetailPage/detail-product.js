import { memo, useState } from 'react';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaPinterestP } from 'react-icons/fa';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'assets/user/scss/detail-page.scss'; 

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const DetailProduct = () => {
  const [selectedImage, setSelectedImage] = useState("/assets/images/main.png");
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };
  ///
  const [selectedCrust, setSelectedCrust] = useState('Đế Dày Bột Tươi');
  const [selectedBorder, setSelectedBorder] = useState('Viền phô mai 9');
  const [selectedSize, setSelectedSize] = useState('Cỡ 9 inch');

  const handleCrustChange = (event) => {
    setSelectedCrust(event.target.value);
  };

  const handleBorderChange = (event) => {
    setSelectedBorder(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div>
      <div className="container mx-auto p-2 py-[85px] w-[1200px]">
        {/* Grid Container */}
        <div className="flex gap-10 w-full">
          <div className="flex flex-col gap-5">
            {/* Main Product Image */}
            <div>
              <img className="w-[520px] h-[590px] rounded-lg" src={selectedImage} alt="Main Product" />
            </div>
            {/* Image Gallery */}
            <div className="w-[500px]">
              <CarouselMulti
                responsive={responsive}
                infinite={true}
              >
                {
                  [
                    "/assets/images/main.png",
                    "/assets/images/main.png",
                    "/assets/images/main.png",
                    "/assets/images/main.png",
                    "/assets/images/main.png",
                    "/assets/images/main.png",
                  ].map((src, index) => (
                    <div className="gallery__item flex gap-5">
                      <img
                        key={index}
                        className="w-[125px] h-[120px] rounded-lg cursor-pointer hover:opacity-80 transition duration-300"
                        src={src}
                        alt={`Pizza ${index + 1}`}
                        onClick={() => handleImageClick(src)}
                      />
                    </div>
                  ))}
              </CarouselMulti>
            </div>
          </div>

          {/* Product Information */}
          <div className="w-[670px]">
            <div className="space-y-4">
              {/* Stock Status */}
              <span className="bg-yellow-400 text-white px-2 py-1 rounded">In stock</span>

              {/* Product Title */}
              <h1 className="text-4xl font-bold">Yummy Chicken Chup</h1>

              {/* Product Description */}
              <p className="text-gray-600 text-[16px] w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <div className="mt-14 border-t border-gray-300 w-[480px]"></div>

              {/* Product Price */}
              <div className="text-2xl font-semibold text-gray-900">54.00$</div>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-[16px]">★★★★★</span>
                <span className="text-gray-600">5.0 Rating</span>
                <span className="text-gray-500">| 22 Reviews</span>
              </div>
              <div>
                {/* biến thể */}
                {/* Chọn Đế Bánh */}
                <div>
                  <span className="font-bold">Chọn Đế Bánh</span>
                  <div className="flex gap-4 py-3">
                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-crust"
                        value="Đế Dày Bột Tươi"
                        checked={selectedCrust === 'Đế Dày Bột Tươi'}
                        onChange={handleCrustChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Đế Dày Bột Tươi</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>

                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-crust"
                        value="Đế Vừa Bột Tươi"
                        checked={selectedCrust === 'Đế Vừa Bột Tươi'}
                        onChange={handleCrustChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Đế Vừa Bột Tươi</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>

                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-crust"
                        value="Đế Mỏng Giòn"
                        checked={selectedCrust === 'Đế Mỏng Giòn'}
                        onChange={handleCrustChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Đế Mỏng Giòn</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>
                  </div>
                </div>

                {/* Tùy Chọn Viền */}
                <div>
                  <span className="font-bold">Tùy Chọn Viền</span>
                  <div className="flex gap-4 py-3">
                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-border"
                        value="Viền phô mai 9"
                        checked={selectedBorder === 'Viền phô mai 9'}
                        onChange={handleBorderChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Viền phô mai 9</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>

                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-border"
                        value="Viền xúc xích"
                        checked={selectedBorder === 'Viền xúc xích'}
                        onChange={handleBorderChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Viền xúc xích</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>
                  </div>
                </div>

                {/* Chọn Cỡ Bánh */}
                <div>
                  <span className="font-bold">Chọn Cỡ Bánh</span>
                  <div className="flex gap-4 py-3">
                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-size"
                        value="Cỡ 9 inch"
                        checked={selectedSize === 'Cỡ 9 inch'}
                        onChange={handleSizeChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Cỡ 9 inch</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>

                    <label className="flex items-center gap-2 text-gray-600 text-[15px]">
                      <input
                        type="radio"
                        name="pizza-size"
                        value="Cỡ 12 inch"
                        checked={selectedSize === 'Cỡ 12 inch'}
                        onChange={handleSizeChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>Cỡ 12 inch</span>
                      <img src="/assets/images/new-products/new-pro-1.jpg" alt="Pizza icon" className="h-7 w-7" />
                    </label>
                  </div>
                </div>
              </div>
              {/* biến thể */}
              {/* Quantity Selector and Add to Cart */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300">
                  <button onClick={() => handleQuantityChange(quantity - 1)} className="px-2">-</button>
                  <input
                    className="w-12 text-center outline-none"
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                  />
                  <button onClick={() => handleQuantityChange(quantity + 1)} className="px-2">+</button>
                </div>
                <button className="bg-[#BC9A6C] text-white px-6 py-2 rounded-md hover:bg-[#a47d53] transition duration-300">
                  Thêm vào giỏ hàng
                </button>
              </div>

              <div className="mt-20 border-t border-gray-300 w-[480px]"></div>

              {/* Wishlist and Compare */}
              <div className="flex space-x-4 text-gray-600">
                <button className="flex items-center">
                  <span>♡</span>
                  <span className="ml-2 text-[16px]">Add to Wishlist</span>
                </button>
                <button className="flex items-center">
                  <span>⇔</span>
                  <span className="ml-2 text-[16px]">Compare</span>
                </button>
              </div>

              {/* Category and Tags */}
              <div className="text-gray-600 space-y-2">
                <p>Category: <span className="font-semibold text-[16px]">Pizza</span></p>
                <p>Tag: <span className="font-semibold text-[16px]">Our Shop</span></p>
              </div>

              {/* Social Media Share */}
              <div className="flex space-x-4 mt-6">
                <span className='font-semibold text-[16px] text-gray-600'>Share:</span>
                <FaFacebookF className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                <FaTwitter className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                <FaTelegramPlane className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                <FaPinterestP className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/*Chọn mô tả sản phẩm hoặc review sản phẩm*/}
        <div data-aos="zoom-in">
          <div className="flex space-x-8 pt-20 text-[17px]">
            <button
              className={`border-b-2 px-4 py-2 ${activeTab === 'description' ? 'border-[#BC9A6C] text-[#BC9A6C]' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('description')}
            >
              Mô tả
            </button>
            <button
              className={`border-b-2 px-4 py-2 ${activeTab === 'reviews' ? 'border-[#BC9A6C] text-[#BC9A6C]' : 'border-transparent text-gray-600'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Đánh giá
            </button>
          </div>

          <div className="mt-4 text-gray-600 text-[17px]">
            {activeTab === 'description' && (
              <div className='flex flex-col gap-10'>
                <p data-aos="zoom-in">
                  Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis.
                </p>
                <p data-aos="zoom-in">
                  Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec.
                </p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className='flex flex-col gap-10'>
                <p data-aos="zoom-in">Đánh giá</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailProduct);
