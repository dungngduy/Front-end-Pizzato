import { memo, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Rate, Tag } from "antd";
import {
    FaFacebookF,
    FaTwitter,
    FaTelegramPlane,
    FaPinterestP,
} from "react-icons/fa";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "assets/user/scss/detail-page.scss";
import AxiosInstance from "utils/apiServers";
import { CartContext } from "components/add-to-cart";
import { formatCurrencyVND, formatImage } from "utils/format";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const DetailProduct = () => {
    const { addToCart } = useContext(CartContext);
    const [selectedImage, setSelectedImage] = useState("");
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);

    // Product
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [galleries, setGalleries] = useState([]);
    const [reviews, setReviews] = useState([]);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleQuantityChange = (value) => {
        if (value > 0 && value <= product?.qty) {
            setQuantity(value);
        }
    };

    const [sizes, setSizes] = useState([]);
    const [bases, setBases] = useState([]);
    const [edges, setEdges] = useState([]);
    const [selectedBases, setSelectedBases] = useState("");
    const [selectedEdges, setSelectedEdges] = useState("");
    const [selectedSizes, setSelectedSizes] = useState("");

    const calculateTotalPrice = () => {
        const basePrice = product?.offer_price || 0;
        const basePriceDiff = selectedBases
            ? bases.find((b) => b.name === selectedBases)?.price || 0
            : 0;
        const edgePriceDiff = selectedEdges
            ? edges.find((e) => e.name === selectedEdges)?.price || 0
            : 0;
        const sizePriceDiff = selectedSizes
            ? sizes.find((s) => s.name === selectedSizes)?.price || 0
            : 0;

        return basePrice + basePriceDiff + edgePriceDiff + sizePriceDiff;
    };

    const handleCrustChange = (event) => {
        setSelectedBases(event.target.value);
    };

    const handleEdgesChange = (event) => {
        setSelectedEdges(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSizes(event.target.value);
    };

    useEffect(() => {
        AxiosInstance.get(`/detail/${id}`)
            .then((res) => {
                const image = res.data.product.thumb_image;
                setSelectedImage(image);
                setProduct(res.data.product);
                const galleries = res.data.product.galleries.map((g) => g.url);
                setGalleries(galleries);

                setBases(res.data.product.bases || []);
                setEdges(res.data.product.edges || []);
                setSizes(res.data.product.sizes || []);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleAddToCart = () => {
        if (
            (bases.length > 0 && !selectedBases) ||
            (edges.length > 0 && !selectedEdges) ||
            (sizes.length > 0 && !selectedSizes)
        ) {
            alert("Vui lớn chọn đế bánh, viền, cỡ bánh");
            return;
        }
        const subId = `${product.id}-${selectedBases || "Not Updated"}-${selectedEdges || "Not Updated"}-${selectedSizes || "Not Updated"}`;
        const user = JSON.parse(localStorage.getItem("user"));
        const newPizza = {
            subId: subId,
            id: product.id,
            name: product.name,
            qty: product.qty,
            price: calculateTotalPrice(),
            image: product.thumb_image,
            quantity: quantity,
            crust: selectedBases || "",
            border: selectedEdges || "",
            size: selectedSizes || "",
            user_id: user?.id
        };

        addToCart(newPizza);

        alert("Đã thêm thành công");
    };

    useEffect(() => {
        AxiosInstance.get(`/products/${id}/reviews`)
            .then((res) => {
                setReviews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const avgReview = parseFloat((reviews.map((review) => review.rating).reduce((a, b) => a + b, 0) / reviews.length).toFixed(1));

    return (
        <div>
            <div className="container mx-auto p-2 py-[85px] w-[1200px]">
                {/* Grid Container */}
                {product && (
                    <div className="flex gap-10 w-full">
                        <div className="flex flex-col gap-5">
                            {/* Main Product Image */}
                            <div className="w-[520px] h-[520px]">
                                <img
                                    className="w-[100%] rounded-lg"
                                    src={formatImage(selectedImage)}
                                    alt="Main Product"
                                />
                            </div>
                            {/* Image Gallery */}
                            <div className="w-[500px]">
                                <CarouselMulti responsive={responsive} infinite={true}>
                                    <div key="main-image" className="gallery__item flex gap-5">
                                        <img
                                            className="w-[125px] h-[120px] rounded-lg cursor-pointer hover:opacity-80 transition duration-300"
                                            src={formatImage(selectedImage)}
                                            alt="Main Product"
                                            onClick={() => handleImageClick(selectedImage)}
                                        />
                                    </div>
                                    {galleries.map((item, index) => (
                                        <div key={index} className="gallery__item flex gap-5">
                                            <img
                                                className="w-[125px] h-[120px] rounded-lg cursor-pointer hover:opacity-80 transition duration-300"
                                                src={formatImage(item)}
                                                alt={`Pizza ${index + 1}`}
                                                onClick={() => handleImageClick(item)}
                                            />
                                        </div>
                                    ))}
                                </CarouselMulti>
                            </div>
                        </div>

                        <div className="w-[670px]">
                            <div className="space-y-4">
                                <span className="bg-yellow-400 text-white px-2 py-1 rounded">
                                    {product.category.name}
                                </span>

                                <h1 className="text-4xl font-bold">{product.name}</h1>

                                <p className="text-gray-600 text-[16px] w-[500px]">
                                    {product.short_description}
                                </p>

                                <div className="mt-14 border-t border-gray-300 w-[480px]"></div>

                                <div className="text-2xl font-semibold text-gray-900">
                                    {formatCurrencyVND(calculateTotalPrice())}
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Rate
                                        className="text-[16px]"
                                        allowHalf
                                        disabled
                                        defaultValue={avgReview}
                                    />
                                    <span className="text-gray-600">{avgReview} đánh giá</span>
                                    <span className="text-gray-500">| {product.view} Lượt xem</span>
                                </div>
                                <div>
                                    {/* biến thể */}
                                    {bases.length > 0 && (
                                        <div className="mb-2">
                                            <span className="font-bold">Chọn Đế Bánh</span>
                                            <div className="flex gap-4 py-3">
                                                {bases.map((base) => (
                                                    <label
                                                        key={base.id}
                                                        className="flex items-center gap-2 text-gray-600 text-[15px]"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="pizza-crust"
                                                            value={base.name}
                                                            checked={selectedBases === base.name}
                                                            onChange={handleCrustChange}
                                                            className="form-radio h-4 w-4 text-blue-600"
                                                        />
                                                        <span>{base.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {edges.length > 0 && (
                                        <div className="mb-2">
                                            <span className="font-bold">Tùy Chọn Viền</span>
                                            <div className="flex gap-4 py-3">
                                                {edges.map((edge) => (
                                                    <label
                                                        key={edge.id}
                                                        className="flex items-center gap-2 text-gray-600 text-[15px]"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="pizza-border"
                                                            value={edge.name}
                                                            checked={selectedEdges === edge.name}
                                                            onChange={handleEdgesChange}
                                                            className="form-radio h-4 w-4 text-blue-600"
                                                        />
                                                        <span>{edge.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {sizes.length > 0 && (
                                        <div>
                                            <span className="font-bold">Chọn Cỡ Bánh</span>
                                            <div className="flex gap-4 py-3">
                                                {sizes.map((size) => (
                                                    <label
                                                        key={size.id}
                                                        className="flex items-center gap-2 text-gray-600 text-[15px]"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="pizza-size"
                                                            value={size.name}
                                                            checked={selectedSizes === size.name}
                                                            onChange={handleSizeChange}
                                                            className="form-radio h-4 w-4 text-blue-600"
                                                        />
                                                        <span>{size.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* biến thể */}
                                {/* Quantity Selector and Add to Cart */}
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center border border-gray-300">
                                        <button
                                            onClick={() => handleQuantityChange(quantity - 1)}
                                            className="px-2"
                                        >
                                            -
                                        </button>
                                        <input
                                            className="w-12 text-center outline-none"
                                            type="number"
                                            value={quantity}
                                            min="1"
                                            max={product.qty}
                                            onChange={(e) =>
                                                handleQuantityChange(parseInt(e.target.value))
                                            }
                                        />
                                        <button
                                            onClick={() => handleQuantityChange(quantity + 1)}
                                            className="px-2"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className={`bg-[#BC9A6C] text-white px-6 py-2 rounded-md hover:bg-[#a47d53] transition duration-300 ${product.qty === 0 ? "bg-gray-400 cursor-not-allowed" : ""}`}
                                        disabled={product.qty === 0}
                                    >
                                        {product.qty === 0 ? "Sản phẩm đã hết hàng" : "Thêm vào giỏ hàng"}
                                    </button>
                                </div>

                                <div className="mt-20 border-t border-gray-300 w-[480px]"></div>

                                {/* Wishlist and Compare */}
                                <div className="flex space-x-4 text-gray-600">
                                    <button className="flex items-center">
                                        <span>♡</span>
                                        <span className="ml-2 text-[16px]">Thêm vào yêu thích</span>
                                    </button>
                                    <button className="flex items-center">
                                        <span>⇔</span>
                                        <span className="ml-2 text-[16px]">So sánh</span>
                                    </button>
                                </div>

                                {/* Category and Tags */}
                                <div className="text-gray-600 space-y-2">
                                    <p>
                                        Danh mục:{" "}
                                        <span className="font-semibold text-[16px]">
                                            {product.category.name}
                                        </span>
                                    </p>
                                    <p>
                                        Tag:{" "}
                                        <span className="font-semibold text-[16px]">
                                            <Tag color="#BC9A6C">Pizza</Tag>
                                        </span>
                                    </p>
                                </div>

                                {/* Social Media Share */}
                                <div className="flex space-x-4 mt-6">
                                    <span className="font-semibold text-[16px] text-gray-600">
                                        Chia sẻ:
                                    </span>
                                    <FaFacebookF className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                                    <FaTwitter className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                                    <FaTelegramPlane className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                                    <FaPinterestP className="cursor-pointer hover:text-[#BC9A6C] transition duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/*Chọn mô tả sản phẩm hoặc review sản phẩm*/}
                <div data-aos="zoom-in">
                    <div className="flex space-x-8 pt-20 text-[17px]">
                        <button
                            className={`border-b-2 px-4 py-2 ${activeTab === "description"
                                ? "border-[#BC9A6C] text-[#BC9A6C]"
                                : "border-transparent text-gray-600"
                                }`}
                            onClick={() => setActiveTab("description")}
                        >
                            Mô tả
                        </button>
                        <button
                            className={`border-b-2 px-4 py-2 ${activeTab === "reviews"
                                ? "border-[#BC9A6C] text-[#BC9A6C]"
                                : "border-transparent text-gray-600"
                                }`}
                            onClick={() => setActiveTab("reviews")}
                        >
                            Đánh giá
                        </button>
                    </div>

                    <div className="mt-4 text-gray-600 text-[17px]">
                        {activeTab === "description" && (
                            <div className="flex flex-col gap-10">
                                <p data-aos="zoom-in">{product?.long_description}</p>
                            </div>
                        )}
                        {activeTab === "reviews" && (
                            <div className="flex flex-col gap-10">
                                {reviews && reviews.length > 0 ? (
                                    reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            data-aos="zoom-in"
                                            className="flex justify-between"
                                        >
                                            <div>
                                                <div className="">{review.review}</div>
                                                <Rate
                                                    className="text-[16px]"
                                                    allowHalf
                                                    disabled
                                                    defaultValue={review.rating}
                                                />
                                                <div>{review.user.name}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">Chưa có bình luận nào.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DetailProduct);
