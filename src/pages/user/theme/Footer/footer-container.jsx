import { memo } from "react";
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from "react-router-dom";

const newsData = [
    {
        date: "19-05-2024",
        author: "Nguyễn Duy Dũng",
        title: "Bí quyết tự làm bánh Pizza ngon như nhà hàng",
        description: "Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới. Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến.",
        image: "https://bepxua.vn/wp-content/uploads/2021/01/lam-banh-pizza-tai-nha-2.jpg",
        link: "/blog"
    },
    {
        date: "20-05-2024",
        author: "Trần Minh Tuấn",
        title: "Top 5 loại nhân Pizza hấp dẫn nhất thế giới",
        description: "Cùng khám phá các loại nhân pizza độc đáo nhất mà bạn không nên bỏ qua. Từ nhân hải sản đến nhân phô mai tràn đầy hương vị.",
        image: "https://cdn.tgdd.vn/2021/08/CookProduct/cacloai(4)-1200x676.jpg",
        link: "/blog"
    },
    {
        date: "21-05-2024",
        author: "Lê Hải Đăng",
        title: "Lịch sử và sự phát triển của món Pizza",
        description: "Pizza có nguồn gốc từ Ý và đã phát triển thành một món ăn phổ biến trên toàn cầu. Tìm hiểu hành trình thú vị của món ăn này qua các thời kỳ.",
        image: "https://veronapizza.vn/wp-content/uploads/2024/01/z4944987098497_a7045891a26d642c19ee896aafe7ed1a.jpg",
        link: "/blog"
    }
];

const FooterContainer = () => {
    return (
        <div className="footer__container" style={{ backgroundImage: "url('/assets/images/footer.jpg')" }}>
            <div className="overlay__footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3" data-aos="fade-right">
                            <h2 className="footer__about">
                                Giới thiệu chung
                            </h2>
                            <p className="footer__description">
                                Chúng tôi mang đến những chiếc pizza ngon từ nguyên liệu tươi nhất,
                                phục vụ với thực đơn phong phú và dịch vụ tận tâm. Hãy ghé thăm để
                                thưởng thức hương vị tuyệt vời!
                            </p>
                            <div className="footer__time">
                                <Link to={"/"}><AiOutlineFieldTime /></Link>
                                <div className="footer__hours">
                                    <h4>Giờ mở cửa:</h4>
                                    <p>Từ Thứ 2 - Thứ 7 <br />(08:00 - 22:00)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3" data-aos="fade-right">
                            <h2 className="footer__about__me">
                                Về chúng tôi
                            </h2>
                            <div className="links__about__me">
                                <ul>
                                    <li><Link to={"/"}>Trang chủ</Link></li>
                                    <li><Link to={"/about"}>Giới thiệu</Link></li>
                                    <li><Link to={"/category"}>Thực đơn</Link></li>
                                    <li><Link to={"/blog"}>Bài viết</Link></li>
                                    <li><Link to={"/policy"}>Chính sách</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3" data-aos="fade-left">
                            <h2 className="footer__help">
                                Trợ giúp
                            </h2>
                            <div className="links__help">
                                <ul>
                                    <li><Link to={"/"}>FAQ</Link></li>
                                    <li><Link to={"/"}>Điều khoản & Bảo mật</Link></li>
                                    <li><Link to={"/"}>Báo cáo</Link></li>
                                    <li><Link to={"/"}>Tài liệu</Link></li>
                                    <li><Link to={"/"}>Liên hệ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3" data-aos="fade-left">
                            <h2 className="footer__post">
                                Bài viết gần đây
                            </h2>
                            <div className="recent__post">
                                {newsData.map((news, index) => (<div key={index} className="recent__post__item">
                                    <div className="recent__post__item">
                                        <div className="recent__post__images">
                                            <img src={news.image} alt="" />
                                        </div>
                                        <div className="recent__post__text">
                                            <p className="recent__post__title">
                                                <Link to={news.link}>{news.title}</Link>
                                            </p>
                                            <p className="recent__post__date">
                                                {news.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(FooterContainer);