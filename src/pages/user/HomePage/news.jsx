import { memo } from "react";
import { Link } from "react-router-dom";
import { MdDateRange, MdOutlineTrendingFlat } from "react-icons/md";
import { PiUser } from "react-icons/pi";

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

const News = () => {
    return (
        <div className="news__box">
            <div className="title__new">
                <h2 data-aos="fade-up"><strong>Tin tức</strong> nổi bật</h2>
                <p data-aos="fade-up">
                    Theo dõi diễn biến các sự kiện đáng chú ý trên toàn cầu,
                    cập nhật liên tục <br /> để bạn luôn nắm bắt thông tin một cách nhanh chóng và chính xác
                </p>
            </div>
            <div className="row-grid-4">
                {newsData.map((news, index) => (
                    <div className="g-xl-4" data-aos="fade-up" key={index}>
                        <div className="new__item">
                            <div className="news__image">
                                <img src={news.image} alt={news.title} />
                            </div>
                            <div className="new__content">
                                <div className="new__author">
                                    <div className="date">
                                        <MdDateRange />
                                        <p>{news.date}</p>
                                    </div>
                                    <div className="author">
                                        <PiUser />
                                        <p>{news.author}</p>
                                    </div>
                                </div>
                                <div className="new__info">
                                    <Link to={news.link}>
                                        <h2>{news.title}</h2>
                                        <p>{news.description}</p>
                                        <div className="new__button">
                                            <button type="button" className="href__button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(News);