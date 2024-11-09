import { memo, useState } from "react";
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
import AxiosInstance from "utils/apiServers";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('confirmPassword', formData.confirmPassword);

        AxiosInstance.post('/register', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((response) => {
            if (!response.ok) {
                return setError(response.statusText);
            }
        })
        .then((data) => {
            setSuccess(true);
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        })
        .catch((err) => {
            setError(err.message);
        });
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const data = new FormData();
        data.append('email', formData.email);
        data.append('password', formData.password);

        AxiosInstance.post('/login', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((response) => {
            if (response.status === 200) {
                const userWithAddress = {
                    ...response.data.user,
                    address: response.data.address,
                };

                // Lưu thông tin người dùng vào localStorage
                localStorage.setItem('user', JSON.stringify(userWithAddress));
                setSuccess(true);
                setFormData({ email: '', password: '' });
            }
        })
        .catch((err) => {
            setError(err.response?.data?.message || 'Đã xảy ra lỗi khi đăng nhập.');
        })
    };

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
                        <form onSubmit={handleSubmitLogin}>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <AiOutlineMail />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineLock />
                                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mật khẩu" />
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
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>Đăng ký thành công!</p>}
                        <form onSubmit={handleSubmitRegister}>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <AiOutlineUser />
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tên đăng nhập" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineMail />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineLock />
                                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mật khẩu" />
                                </div>
                                <div className="input-box">
                                    <AiOutlineCheckCircle />
                                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Xác nhận mật khẩu" />
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