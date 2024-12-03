import { memo } from "react";

const About = () => {
    return (
        <div className="container bg-gray-100 min-h-screen p-6">
            <main>
                {/* About Section */}
                <section id="about" className="py-12 bg-white" data-aos="fade-up">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl uppercase font-bold">Về Chúng Tôi</h2>
                        <p className="mt-4 text-gray-600">
                            Tại Pizza Delight, chúng tôi mang đến hương vị Ý đích thực ngay trên đĩa của bạn. Niềm đam mê với pizza thúc đẩy chúng tôi sử dụng những nguyên liệu tốt nhất để tạo ra những chiếc bánh hoàn hảo.
                        </p>
                    </div>
                </section>

                {/* Menu Section */}
                <section id="menu" className="py-12 bg-gray-100" data-aos="fade-up">
                    <div className="mx-auto">
                        <h2 className="text-3xl font-bold uppercase text-center">Thực Đơn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            {[
                                {
                                    title: "Margherita",
                                    description:
                                        "Pizza cổ điển với lá húng quế tươi, phô mai mozzarella và sốt cà chua.",
                                    price: "288.000 đ",
                                    img: "https://source.unsplash.com/400x300/?pizza-margherita",
                                },
                                {
                                    title: "Pepperoni",
                                    description:
                                        "Ngập tràn pepperoni cay và phô mai mozzarella.",
                                    price: "349.000 đ",
                                    img: "https://source.unsplash.com/400x300/?pizza-pepperoni",
                                },
                                {
                                    title: "Chay",
                                    description:
                                        "Được phủ đầy rau củ tươi ngon cho một bữa ăn lành mạnh.",
                                    price: "179.000 đ",
                                    img: "https://source.unsplash.com/400x300/?vegetarian-pizza",
                                },
                            ].map((pizza, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={pizza.img}
                                        alt={pizza.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold">{pizza.title}</h3>
                                        <p className="text-gray-600 mt-2">{pizza.description}</p>
                                        <p className="text-yellow-500 font-bold mt-4">
                                            {pizza.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl uppercase font-bold" data-aos="fade-up">Liên Hệ</h2>
                        <p className="mt-4 text-gray-600" data-aos="fade-up">
                            Liên hệ với chúng tôi để đặt chỗ hoặc giải đáp thắc mắc. Chúng tôi luôn sẵn sàng phục vụ bạn!
                        </p>
                        <form className="mt-8 max-w-lg mx-auto">
                            <div className="mb-4" data-aos="fade-up">
                                <input
                                    type="text"
                                    placeholder="Tên của bạn"
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                            <div className="mb-4" data-aos="fade-up">
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                            <div className="mb-4" data-aos="fade-up">
                                <textarea
                                    placeholder="Tin nhắn của bạn"
                                    rows="4"
                                    className="w-full border border-gray-300 rounded p-2"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#BC9A6C] text-white px-6 py-2 rounded"
                                data-aos="fade-up"
                            >
                                Gửi Tin Nhắn
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default memo(About);