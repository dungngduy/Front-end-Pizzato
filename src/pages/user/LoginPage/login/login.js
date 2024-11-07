import { memo } from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineLock,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineCheckCircle,
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineGoogle,
    AiOutlineLinkedin
} from "react-icons/ai";

const LoginPage = () => {
    return (
        <div className="container login__container" data-aos="fade-down">
            <input type="checkbox" id="flip" />
            <div className="cover">
                <div className="front">
                    <img src="/assets/images/frontImg.jpg" alt="" />
                    <div className="text">
                        <span className="text-1">
                            Chào mừng bạn đến với Pizzato! <br />
                            Hãy kết nối với chúng tôi để không bỏ lỡ những món pizza mới nhất.
                        </span>
                        <span className="text-2">Đăng nhập ngay nào!</span>
                    </div>
                </div>
                <div className="back">
                    <img className="backImg" src="/assets/images/backImg.jpg" alt="" />
                    <div className="text">
                        <span className="text-1">
                            Đăng ký để trở thành thành viên của Pizzato <br />
                            và nhận ngay ưu đãi hấp dẫn!
                        </span>
                        <span className="text-2">Đăng ký liền tay nào!</span>
                    </div>
                </div>
            </div>
            <div className="forms">
                <div className="form-content">
                    <div className="login-form">
                        <div className="title">Đăng nhập</div>
                        <form action="#">
                            <div className="input-boxes">
                                <div className="input-box">
                                    <AiOutlineUser />
                                    <input type="text" placeholder="Tên đăng nhập" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineLock />
                                    <input type="password" placeholder="Mật khẩu" />
                                </div>
                                <div className="text"><Link to="#">Quên mật khẩu?</Link></div>
                                <div className="button input-box">
                                    <input type="submit" value="Đăng nhập" />
                                </div>
                                <div className="text sign-up-text">Bạn chưa có tài khoản? <label htmlFor="flip">Đăng ký ngay</label></div>
                            </div>
                            <p className="social-text">Hoặc</p>
                            <div className="social-media">
                                <Link to="" className="social-icon">
                                    <AiOutlineFacebook />
                                </Link>
                                <Link to="" className="social-icon">
                                    <AiOutlineTwitter />
                                </Link>
                                <Link to="" className="social-icon">
                                    <AiOutlineGoogle />
                                </Link>
                                <Link to="" className="social-icon">
                                    <AiOutlineLinkedin />
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="signup-form">
                        <div className="title">Đăng ký</div>
                        <form action="#">
                            <div className="input-boxes">
                                <div className="input-box">
                                    <AiOutlineUser />
                                    <input type="text" placeholder="Tên đăng nhập" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineMail />
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineLock />
                                    <input type="password" placeholder="Mật khẩu" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineCheckCircle />
                                    <input type="password" placeholder="Xác nhận mật khẩu" />
                                </div>
                                <div className="button input-box">
                                    <input type="submit" value="Đăng ký" />
                                </div>
                                <div className="text sign-up-text">Bạn đã có tài khoản? <label htmlFor="flip">Đăng nhập ngay</label></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(LoginPage);