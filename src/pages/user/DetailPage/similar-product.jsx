import { FaHeart, FaExchangeAlt } from 'react-icons/fa';
import { memo, useState, useEffect } from 'react';
import AxiosInstance from 'utils/apiServers';
import { Link, useParams } from 'react-router-dom';
import { formatCurrencyVND, formatImage } from 'utils/format';

const SimilarProducts = () => {
    const { id } = useParams();
    const [isSimilarPizza, setIsSimilarPizza] = useState([]);

    useEffect(() => {
        AxiosInstance.get(`/similar-pizza/${id}`)
            .then((res) => {
                setIsSimilarPizza(res.data.similarPizzas);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="container mx-auto py-4 pb-[90px]">
            <h2 className="text-2xl font-bold mb-10" data-aos="fade-up">Sản phẩm tương tự</h2>
            <div className="grid grid-cols-4 gap-10" data-aos="fade-up">
                {isSimilarPizza.map((pizza) => (
                    <Link to={`/detail/${pizza.id}`} key={pizza.id}>
                        <div key={pizza.id} className="relative group">
                            {/* Product Image */}
                            <img className="object-cover rounded-md w-[180px] h-[180px]" src={formatImage(pizza.thumb_image)} alt={pizza.thumb_image} />

                            {/* Overlay with Icons */}
                            <div className="absolute mx-12 inset-y-px top-1 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100">
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-400 transition">
                                    <FaHeart className="text-gray-600" />
                                </button>
                                <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-400 transition">
                                    <FaExchangeAlt className="text-gray-600" />
                                </button>
                            </div>

                            {/* pizza Info */}
                            <div className="mt-4 px-4">
                                <div className="h-20 flex flex-col justify-between">
                                    <Link to={`/detail/${pizza.id}`}>
                                        <h3 className="text-l font-bold">{pizza.name}</h3>
                                        <div className='flex gap-2'>
                                            <div className="text-yellow-600 text-x ">{formatCurrencyVND(pizza.offer_price)}</div>
                                            <div>
                                                {pizza.price && (
                                                    <div className="text-gray-500 line-through text-x">{formatCurrencyVND(pizza.price)}</div>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default memo(SimilarProducts);
