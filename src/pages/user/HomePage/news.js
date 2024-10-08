import { memo } from "react";
import { Link } from "react-router-dom";
import {
    MdDateRange,
    MdOutlineTrendingFlat
} from "react-icons/md";
import { PiUser } from "react-icons/pi";

const News = () => {
    return (
        <div className="news__box">
            <div className="row">
                <div className="title__new">
                    <h2 data-aos="fade-up"><strong>Tin tức</strong> nổi bật</h2>
                    <p data-aos="fade-up">
                        Theo dõi diễn biến các sự kiện đáng chú ý trên toàn cầu,
                        cập nhật liên tục <br /> để bạn luôn nắm bắt thông tin một cách nhanh chóng và chính xác
                    </p>
                </div>
                <div className="col-xl-4" data-aos="fade-up">
                    <div className="new__item">
                        <div className="news__image">
                            <img src="/assets/images/news.jpg" alt="News" />
                        </div>
                        <div className="new__content">
                            <div className="new__author">
                                <div className="date">
                                    <MdDateRange />
                                    <p>19-05-2024</p>
                                </div>
                                <div className="author">
                                    <PiUser />
                                    <p>Nguyễn Duy Dũng</p>
                                </div>
                            </div>
                            <div className="new__info">
                                <Link to="">
                                    <h2>Bí quyết tự làm bánh Pizza ngon như nhà hàng</h2>
                                    <p>
                                        Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới.
                                        Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến
                                    </p>
                                    <div className="new__button">
                                        <button type="button" className="href__button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4" data-aos="fade-up">
                    <div className="new__item">
                        <div className="news__image">
                            <img src="/assets/images/news.jpg" alt="News" />
                        </div>
                        <div className="new__content">
                            <div className="new__author">
                                <div className="date">
                                    <MdDateRange />
                                    <p>19-05-2024</p>
                                </div>
                                <div className="author">
                                    <PiUser />
                                    <p>Nguyễn Duy Dũng</p>
                                </div>
                            </div>
                            <div className="new__info">
                                <Link to="">
                                    <h2>Bí quyết tự làm bánh Pizza ngon như nhà hàng</h2>
                                    <p>
                                        Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới.
                                        Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến
                                    </p>
                                    <div className="new__button">
                                        <button type="button" className="href__button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4" data-aos="fade-up">
                    <div className="new__item">
                        <div className="news__image">
                            <img src="/assets/images/news.jpg" alt="News" />
                        </div>
                        <div className="new__content">
                            <div className="new__author">
                                <div className="date">
                                    <MdDateRange />
                                    <p>19-05-2024</p>
                                </div>
                                <div className="author">
                                    <PiUser />
                                    <p>Nguyễn Duy Dũng</p>
                                </div>
                            </div>
                            <div className="new__info">
                                <Link to="">
                                    <h2>Bí quyết tự làm bánh Pizza ngon như nhà hàng</h2>
                                    <p>
                                        Pizza là một trong những món ăn nhanh phổ biến nhất trên thế giới.
                                        Trên thực tế hiện nay có thể tìm thấy món ăn này ở bất cứ quốc gia nào mà bạn đặt chân đến
                                    </p>
                                    <div className="new__button">
                                        <button type="button" className="href__button">Đọc tiếp <MdOutlineTrendingFlat /></button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(News);