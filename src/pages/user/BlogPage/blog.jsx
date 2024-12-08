import React from "react";

const BlogList = () => {
    return (
        <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Content chính */}
                <div className="col-span-2 bg-white rounded-md p-6">
                    <h1 className="text-2xl font-extrabold text-red-500 mb-6 text-center uppercase tracking-wide">
                        Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Mỹ
                    </h1>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-left">
                        Ẩm Thực Nước Mỹ
                    </h3>
                    <p className="text-[16px] leading-relaxed text-gray-700">
                        Đối với những ai may mắn được đi một chuyến du lịch đến Mỹ, chắc hẳn
                        đã được thưởng thức món ăn được xem là dân dã và vô cùng quen thuộc
                        với người dân nơi đây: món bánh Pizza. Món ăn này không chỉ phổ biến
                        tại Mỹ, mà nổi tiếng nhất với cội nguồn từ nước Ý. Tuy nhiên, Mỹ
                        cũng được coi là quê hương thứ hai của Pizza bởi món ăn này đã trở
                        thành lựa chọn quen thuộc và phổ biến như bánh mì tại Việt Nam.
                    </p>
                    <p className="text-[16px] leading-relaxed text-gray-700 mt-4 mb-4">
                        Người Mỹ xem bánh Pizza như một “vị cứu tinh” trong những ngày bận
                        rộn. Đây được coi là món ăn vừa ngon miệng, vừa đầy đủ dinh dưỡng,
                        giúp họ có năng lượng làm việc hiệu quả trong guồng sống vội vã.
                        Pizza có thể được người Mỹ thưởng thức cả ngày, từ bữa trưa đến bữa
                        tối. Nếu bạn có cơ hội đến Mỹ mà không thử món Pizza đậm đà này, đó
                        chắc chắn sẽ là một thiếu sót lớn trong hành trình khám phá văn hóa
                        ẩm thực nơi đây.
                    </p>
                    <p className="text-[16px] leading-relaxed text-gray-700 mt-4 mb-4">
                        uy nhiên, sẽ có sự khác biệt về hương vị của những chiếc bánh Pizza,
                        bởi mỗi nơi, mỗi vùng miền dân tộc sẽ có sự khác nhau về khẩu vị.
                        Vậy nên, chỉ có tại nước Mỹ bạn mới có thể tìm được món bánh Pizza
                        đúng theo phong cách phóng khoáng như người dân nơi đây. Pizza của
                        mỗi thương hiệu, mỗi tiểu mang nước Mỹ cũng sẽ mang đến hương vị và
                        phong cách khác nhau. Trong đó, được chú ý nhất có thể là Pizza mang
                        phong cách Chicago, với phần đế bánh rất dày kèm với phần nhân vô
                        cùng chất lượng, đáng để bạn đến và nếm thứ nó một lần trong đời
                        nhé. Nếu bạn là một “fan” của món bánh Pizza hay bạn là người đam mê
                        thức ăn nhanh. Hãy lựa chọn Pizza nhé. Gợi ý đến bạn một nơi có thể
                        đáp ứng mọi yêu cầu về các món Pizza với sự đa dạng và phong phú đến
                        bạn. Nếu chưa có thời gian cũng như điều kiện bay tới Mỹ để du lịch
                        thì ngay tại Việt Nam, Pizza Express có thể sẽ là nơi giúp bạn trải
                        nghiệm ăn Pizza kiểu Mỹ ngay tại lòng Hà Nội nhé.
                    </p>
                    <div>
                        <img
                            src="https://www.pizzaexpress.vn/wp-content/uploads/2020/12/di-san-vo-hinh-cua-nuoc-y-145711.jpg"
                            alt="Pizza khuyến mãi"
                            className="mb-6 rounded-lg shadow-lg"
                        />
                        <p className="py-4 text-[16px] leading-relaxed text-gray-700">
                            <span className="font-semibold text-lg">
                                Như các bạn đã biết,
                            </span>{" "}
                            Pizza được biết đến là một nét đặc biệt trong ẩm thực Ý. Bên cạnh
                            đó, nó đã trở thành món ăn rất được yêu thích và phổ biến trên
                            toàn thế giới. Với một đất nước rộng lớn và luôn ưu tiên sự tiện
                            dụng cũng như tiết kiệm thời gian, Pizza đã trở thành một trong
                            những lựa chọn được nhiều người ưa thích trong văn hóa ẩm thực Mỹ.
                        </p>

                        <p className="py-4 text-[16px] leading-relaxed text-gray-700">
                            Tại Mỹ, món Pizza này được chế biến với nhiều hương vị, từ phần
                            nhân bánh, đế bánh cho đến nước sốt. Để đáp ứng thị hiếu đa dạng
                            của thực khách, phần đế bánh thường được làm từ bột mì trộn với
                            chút dầu oliu. Hai loại đế phổ biến nhất là đế dày và đế mỏng.
                            Nguyên liệu phổ biến trong phần nhân bánh gồm phô mai, thịt động
                            vật, hải sản, rau củ và cả trái cây.
                        </p>

                        <p className="py-4 text-[16px] leading-relaxed text-gray-700">
                            <span className="font-semibold text-lg">Phần nước sốt</span> phổ
                            biến nhất vẫn là sốt cà chua, hoặc có thể thay thế bằng sốt bơ tỏi
                            hay nước sốt được chế biến từ rau bina và hành tây. Tại Mỹ, nhiều
                            thương hiệu lớn chuyên phục vụ bánh Pizza đã vươn ra khắp thế
                            giới, trong đó có Việt Nam. Tuy nhiên, mỗi vùng miền lại có sự
                            khác biệt về hương vị. Vậy nên, chỉ tại nước Mỹ bạn mới có thể tìm
                            thấy món Pizza đúng chuẩn phong cách phóng khoáng của người dân
                            nơi đây.
                        </p>

                        <p className="py-4 text-[16px] leading-relaxed text-gray-700">
                            <span className="font-semibold text-lg">
                                Tận Hưởng Những Chiếc Bánh Pizza Thơm Ngon Với Đặc Trưng Riêng
                            </span>{" "}
                            phổ Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ Chuyên mục
                            hôm nay, Pizza Express xin được gửi đến các bạn đôi điều về món
                            Pizza trong ẩm thực của nước Mỹ. Hãy cùng theo dõi bài viết để
                            hiểu hơn về ẩm thực nước bạn nhé: Để được miễn phí giao hàng, gọi
                            ngay Pizza Express tại đây Ẩm Thực Nước Mỹ Đối với những ai may
                            mắn được đi một chuyến du lịch đến Mỹ, chắc hẳn đã được thưởng
                            thức món ăn với được xem là dẫn dã. Vô cùng quen thuộc với người
                            dân ở Mỹ là món bánh Pizza. Món ăn này chắc không chỉ phổ biến tại
                            Mỹ, nổi tiếng nhất và là quê hương của Pizza thì chúng ta không
                            thể không nhắc tới nước Ý. Tuy nhiên Mỹ cũng được coi là quê hương
                            thứ hai của món ăn này. Bởi món Pizza được đông đảo người Mỹ chọn
                            làm món ăn dẫn dã, quen thuộc. Pizza cũng được phổ biến như món
                            bánh mì tại Việt Nam vậy. Người Mỹ xem bánh Pizza như một “vị cứu
                            tinh” cho những ngày bận rộn. Đây được coi là món ăn vừa ngon
                            miệng, vừa mang đến đầy đủ chất dinh dưỡng giúp bạn có thể làm
                            việc với chiếc bụng no trong guồng sống vội vã tại Mỹ. Người Mỹ có
                            thể ăn Pizza cả ngày gồm cả bữa trưa lẫn bữa tối. Nếu ghé chân đến
                            Mỹ mà không thưởng thức món bánh Pizza đạm đà ấy, thì có lẽ sẽ là
                            một điều tiếc nuối cũng như một thiếu sót khi du lịch tại đất nước
                            này. Như các bạn đã biết, Pizza được biết đến là một nét đặc trong
                            độc đáo trong ẩm thực Ý. Bên cạnh đó, nó đã trở thành món ăn rất
                            được yêu thích và phổ biến trên toàn thế giới. Với một đất nước
                            rộng lớn và luôn ưu tiên sự tiện dụng cũng như tiết kiệm tối thiểu
                            về mặt thời gian. Thì Pizza đã trở thành một trong những lựa chọn
                            được nhiều người lựa chọn và ưu ái trong văn hoá ẩm thực Mỹ. Tại
                            Mỹ, món Pizza này được chế biến với nhiều hương vị về cả phần nhân
                            bánh, đế bánh và nước sốt. Để đáp ứng thị yếu cũng như tất cả các
                            sở thích khác nhau của thực khách. Nhưng tuy vậy, nó vẫn được giữ
                            về phần cơ bản, phần đế bánh thường được làm từ bột mì trộn với
                            chút dầu oliu. Có hai loại đế được sử dụng khá phổ biến là đế dày
                            và mỏng. Nguyên liệu phố biến nhất được sử dụng trong phần nhân
                            bánh thường là phô mai, thịt động vật, hải sản và cả rau củ, trái
                            cây… Phần nước sốt phổ biến nhất vẫn là sốt cà chua, có thể thay
                            thế bằng sốt bơ tỏi hay nước sốt được chế biến từ rau bina và hành
                            tây. Tại Mỹ có rất nhiều thương hiệu lớn chỉ chuyên phục vụ bánh
                            Pizza, trong đó cũng có một số thương hiệu lớn ở Mỹ đã vươn ra
                            khắp thế giới và được rất nhiều người đón nhận, và cũng đã có mặt
                            tại Việt Nam. Tuy nhiên, sẽ có sự khác biệt về hương vị của những
                            chiếc bánh Pizza, bởi mỗi nơi, mỗi vùng miền dân tộc sẽ có sự khác
                            nhau về khẩu vị. Vậy nên, chỉ có tại nước Mỹ bạn mới có thể tìm
                            được món bánh Pizza đúng theo phong cách phóng khoáng như người
                            dân nơi đây. Pizza của mỗi thương hiệu, mỗi tiểu mang nước Mỹ cũng
                            sẽ mang đến hương vị và phong cách khác nhau. Trong đó, được chú ý
                            nhất có thể là Pizza mang phong cách Chicago, với phần đế bánh rất
                            dày kèm với phần nhân vô cùng chất lượng, đáng để bạn đến và nếm
                            thứ nó một lần trong đời nhé. Nếu bạn là một “fan” của món bánh
                            Pizza hay bạn là người đam mê thức ăn nhanh. Hãy lựa chọn Pizza
                            nhé. Gợi ý đến bạn một nơi có thể đáp ứng mọi yêu cầu về các món
                            Pizza với sự đa dạng và phong phú đến bạn. Nếu chưa có thời gian
                            cũng như điều kiện bay tới Mỹ để du lịch thì ngay tại Việt Nam,
                            Pizza Express có thể sẽ là nơi giúp bạn trải nghiệm ăn Pizza kiểu
                            Mỹ ngay tại lòng Hà Nội nhé. Tận Hưởng Những Chiếc Bánh Pizza Thơm
                            Ngon Với Đặc Trưng Riêng Hãy cùng đến Pizza Express để trải nghiệm
                            những món mới với những ƯU ĐÃI vô cùng lớn nhé. Chúng tôi luôn
                            mong muốn gửi đến bạn những bữa ăn chất lượng với giá hợp lý nhất.
                            Pizza Express với giá hợp lý, phù hợp với mọi lứa tuổi của về giá
                            cả và chất lượng. Với 3 tiêu chí một trong những thương hiệu Pizza
                            Việt Nam. Tiên phong với tiêu chí Pizza Ngon, Giá hợp lý, Phục vụ
                            tại nhà.
                        </p>
                        <p className="py-4 text-[16px] leading-relaxed text-gray-700">
                            Pizza Express Với 3 Tiêu Chí: Pizza ngon - Giá rẻ - Vận chuyển tận
                            nhà Hãy cùng đến Pizza Express để trải nghiệm những món mới với
                            những ƯU ĐÃI vô cùng lớn nhé. Pizza Express chúng tôi luôn mong
                            muốn gửi đến bạn những bữa ăn chất lượng với giá hợp lý nhất.
                            Pizza Express với giá hợp lý, phù hợp với mọi lứa tuổi của về giá
                            cả và chất lượng. Pizza Express, một trong những thương hiệu Pizza
                            Việt Nam. Tiên phong với tiêu chí Pizza Ngon, Giá hợp lý, Phục vụ
                            tại nhà.
                        </p>
                        <p className="py-4 text-[16px] leading-relaxed text-gray-700">
                            Một trong những phong cách đặc biệt nhất là{" "}
                            <span className="font-semibold italic">
                                Pizza Express Với 3 Tiêu Chí: Pizza ngon - Giá rẻ - Vận chuyển
                                tận nhà
                            </span>
                            , nổi bật với phần đế dày cùng phần nhân vô cùng chất lượng. Nếu
                            bạn là một “fan” của Pizza hoặc đam mê thức ăn nhanh, đây chắc
                            chắn là món bạn không nên bỏ lỡ.
                            <span className="font-semibold text-red-600">
                                {" "}
                                Pizza Express
                            </span>{" "}
                            là địa chỉ lý tưởng để bạn trải nghiệm Pizza kiểu Mỹ ngay tại Hà
                            Nội, mà không cần phải bay đến Mỹ.
                        </p>
                        <img
                            src="https://www.pizzaexpress.vn/wp-content/uploads/2020/12/Artboard-7-copy-2-1.jpg"
                            alt="Pizza khuyến mãi"
                            className="mb-6 rounded-lg shadow-lg"
                        />
                        <p className="text-xl font-semibold text-yellow-600 mb-2">
                            TẶNG NGAY 1 PIZZA + 1 COCA COLA
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            Code: <span className="text-red-500 font-bold">SN12</span>
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li className="font-medium">🎉 Sinh nhật là phải có quà 🎉</li>
                            <li>
                                <span className="text-red-600 font-bold">Pizza Express</span>{" "}
                                khuyến mãi tưng bừng - Mừng sinh nhật bạn.
                            </li>
                            <li>
                                <span className="text-red-600 font-bold">
                                    Pizza Express tặng ngay 01 bánh Pizza (size S) và 1 Coca Cola
                                    390ml.
                                </span>
                            </li>
                        </ul>

                        <p className="text-gray-700 font-bold mb-2">Điều kiện áp dụng:</p>
                        <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                            <li>Có sinh nhật trùng với ngày đặt bánh.</li>
                            <li>Đơn hàng tối thiểu từ 399k trở lên.</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            Vui lòng cung cấp mã{" "}
                            <span className="text-red-500 font-bold">SN12</span> cho nhân viên
                            khi đặt bánh.
                        </p>
                        <p className="text-gray-700 mb-4">
                            <span className="font-bold">Lưu ý:</span> Không áp dụng đồng thời
                            các chương trình khuyến mãi khác.
                        </p>
                        <p className="text-gray-700 mb-6">
                            📞 Liên hệ tổng đài tư vấn:{" "}
                            <span className="text-red-600 font-bold">024.3688.7777</span>
                        </p>

                        <h2 className="text-xl font-bold text-gray-700 mb-2">
                            Pizza Express Vietnam hiện có 4 cơ sở tại Hà Nội:
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>CS1: 107D3 Ngọc Khánh, Ba Đình, Hà Nội</li>
                            <li>CS2: 14 Ngõ 497 Nguyễn Trãi, Thanh Xuân, Hà Nội</li>
                            <li>CS3: 56 Ô Đồng Bát, Cầu Giấy, Hà Nội</li>
                            <li>CS4: 52 Kim Đồng, Hoàng Mai, Hà Nội</li>
                        </ul>
                    </div>
                </div>

                {/* Danh sách bài viết khác */}
                <div className=" rounded-md bg-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">
                        Bài viết khác
                    </h2>
                    <ul className="space-y-4 border-b-3">
                        {[
                            {
                                title: "PIZZA ALFRESCO KHUYẾN MÃI GÌ?",
                                imageUrl:
                                    "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/p1-e1533617300392-370x275.jpg",
                            },
                            {
                                title:
                                    "Đặt bánh Pizza mau chóng đem tới bạn những bữa ăn hợp khẩu vị nhất",
                                imageUrl:
                                    "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/p31-e1533618035827-370x275.jpg",
                            },
                            {
                                title: "PIZZA SHIP TẬN NHÀ HÀ NỘI",
                                imageUrl:
                                    "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/shutterstock_697716298-e1533799435788-370x275.jpg",
                            },
                            {
                                title:
                                    "Đặt bánh Pizza tiện lợi mang tới bạn mọi bữa ăn bổ dưỡng",
                                imageUrl:
                                    "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/p51-e1533617815797-370x275.jpg",
                            },
                            {
                                title: "Pizza mua 1 tặng 1",
                                imageUrl:
                                    "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/km-1-370x275.png",
                            },
                            {
                                title: "Sinh nhật rộn ràng",
                                imageUrl:
                                    "https://www.pizzaexpress.vn/wp-content/uploads/2020/12/Artboard-7-copy-2-1.jpg",
                            },
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center space-x-4 pb-4 border-b-4"
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-20 h-16 rounded-md object-cover"
                                />
                                <p className="text-gray-700">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
