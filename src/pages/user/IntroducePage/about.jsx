import { memo } from "react";

const About = () => {
    return (
        <div className=" container p-8">
            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="py-[130px]">
                    <img
                        src="https://core.afg.vn/uploads/images/1593330280536pep.jpg"
                        alt="Restaurant"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div>
                    <div className="p-8  max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold  text-gray-900 mb-6">
                            Giới thiệu về Pizzato
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Kể từ khi mới bắt đầu hoạt động từ năm 1997, Pizzato đã chinh phục
                            hoàn toàn được khẩu vị của người Việt bởi hương vị đặc biệt của
                            những chiếc bánh pizza, các loại tuyệt vời và một số món ăn được
                            ưa chuộng trên thế giới với giá cả cực kỳ hợp lý. Hiện đã có 9 nhà
                            hàng Pizzato hoạt động tại Hà Nội.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Với khẩu phần và hương vị đặc trưng, Pizzato không những đã và
                            đang được những người nước ngoài sinh sống & làm việc tại Việt
                            Nam, những khách du lịch mà còn cả những người Việt cũng vô cùng
                            hâm mộ và yêu mến. Nằm ngay tại trung tâm thành phố, với không
                            gian rộng mở, bạn có thể ghé vào để thưởng thức 1 ly cà phê hay có
                            thể dùng thoải mái những món ăn tự chọn, mà chỉ với một chi phí
                            phải chăng.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Quý khách đến dùng bữa cùng gia đình và bè bạn. Phục vụ các loại
                            bánh pizza nhiều kích cỡ với đế bánh giòn thơm, các loại mỳ Ý
                            phong phú với các loại sốt thay đổi theo ngày, các loại phomai
                            thơm ngon và thực đơn đặc biệt….
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8  max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold  text-gray-900 mb-6">
                        Sứ mệnh và tầm nhìn
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Với khẩu phần và hương vị đặc trưng, Pizzato không những đã và đang
                        được những người nước ngoài sinh sống & làm việc tại Việt Nam, những
                        khách du lịch mà còn cả những người Việt cũng vô cùng hâm mộ và yêu
                        mến. Nằm ngay tại trung tâm thành phố, với không gian rộng mở, bạn
                        có thể ghé vào để thưởng thức 1 ly cà phê hay có thể dùng thoải mái
                        những món ăn tự chọn, mà chỉ với một chi phí phải chăng.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Pizzato đúng là nơi lý tưởng cho Quý khách đến dùng bữa cùng gia
                        đình và bè bạn. Phục vụ các loại bánh pizza nhiều kích cỡ với đế
                        bánh giòn thơm, các loại mỳ Ý phong phú với các loại sốt thay đổi
                        theo ngày, các loại phomai thơm ngon và thực đơn đặc biệt….
                    </p>
                </div>
                <div>
                    <div className="py-16">
                        <img
                            src="https://daylambanh.edu.vn/wp-content/uploads/2024/04/cach-lam-banh-pizza.jpg"
                            alt="Restaurant"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="py-[140px]">
                    <img
                        src="https://nvhphunu.vn/wp-content/uploads/2023/11/cach-lam-banh-pizza-tom-ngon-nhu-nha-hang.jpg"
                        alt="Restaurant"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div>
                    <div className="p-8  max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold  text-gray-900 mb-6">
                            Những giá trị tạo nên Pizzato
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Từng sản phẩm Fresh Garden được đầu tư rất kỹ ngay từ khâu chọn
                            nguyên liệu, đó là những thành phần tươi mới nhất và chủ yếu đang
                            sử dụng đều đến từ những nhãn hiệu có uy tín như Anchor, Vivo,
                            Meiji, Komplet… Một số dòng sốt của Ý như sốt pizza, sốt mayonaise
                            cũng được nhập trực tiếp từ Ý.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Đến với Fresh Garden là đến với hàng trăm hương, vị bánh đa chủng
                            loại Á - Âu: bánh ngọt, bánh mì tươi, các dòng bánh kem sinh nhật,
                            sự kiện, theo mùa… Các loại bánh luôn được chú trọng sản xuất sao
                            cho đảm bảo hương vị thơm ngon tuyệt vời mà còn an toàn, đảm bảo
                            cho sức khoẻ. Mỗi chiếc bánh ra đời là đam mê của một tập thể tâm
                            huyết với nghề, mỗi sẩn phẩm trao tay là tận tâm của đội ngũ nhân
                            viên với khách hàng.Tất cả những điều đó, bạn sẽ cảm nhận được khi
                            thưởng thức từng dòng bánh tuyệt hảo - ý nghĩa - tiện lợi mà Fresh
                            Garden đặc biệt tạo nên.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Pizzato đúng là nơi lý tưởng cho Quý khách đến dùng bữa cùng gia
                            đình và bè bạn. Phục vụ các loại bánh pizza nhiều kích cỡ với đế
                            bánh giòn thơm, các loại mỳ Ý phong phú với các loại sốt thay đổi
                            theo ngày, các loại phomai thơm ngon và thực đơn đặc biệt….
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(About);
