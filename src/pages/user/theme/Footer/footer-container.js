import { memo } from "react";
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from "react-router-dom";

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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Konfugiendis blabla
                            </p>
                            <div className="footer__time">
                                <Link to={"/"}><AiOutlineFieldTime /></Link>
                                <div className="footer__hours">
                                    <h4>Giờ mở cửa:</h4>
                                    <p>Từ Thứ 2 - Chủ nhật <br />(08:00 - 22:00)</p>
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
                                    <li><Link to={"/"}>Giới thiệu</Link></li>
                                    <li><Link to={"/"}>Thực đơn</Link></li>
                                    <li><Link to={"/"}>Bài viết</Link></li>
                                    <li><Link to={"/"}>Liên hệ</Link></li>
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
                                    <li><Link to={"/"}>Chính sách hỗ trợ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3" data-aos="fade-left">
                            <h2 className="footer__post">
                                Bài viết gần đây
                            </h2>
                            <div className="recent__post">
                                <div className="recent__post__item">
                                    <div className="recent__post__images">
                                        <img src="/assets/images/recent-post-1.jpg" alt="" />
                                    </div>
                                    <div className="recent__post__text">
                                        <p className="recent__post__title">
                                            Đoạn văn bản 2 với nội dung dài hơn
                                        </p>
                                        <p className="recent__post__date">
                                            12-12-2022
                                        </p>
                                    </div>
                                </div>
                                <div className="recent__post__item">
                                    <div className="recent__post__images">
                                        <img src="/assets/images/recent-post-1.jpg" alt="" />
                                    </div>
                                    <div className="recent__post__text">
                                        <p className="recent__post__title">
                                            Đoạn văn bản 2 với nội dung dài hơn
                                        </p>
                                        <p className="recent__post__date">
                                            12-12-2022
                                        </p>
                                    </div>
                                </div>
                                <div className="recent__post__item">
                                    <div className="recent__post__images">
                                        <img src="/assets/images/recent-post-1.jpg" alt="" />
                                    </div>
                                    <div className="recent__post__text">
                                        <p className="recent__post__title">
                                            Đoạn văn bản 2 với nội dung dài hơn
                                        </p>
                                        <p className="recent__post__date">
                                            12-12-2022
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(FooterContainer);