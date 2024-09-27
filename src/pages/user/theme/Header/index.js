import { memo } from "react";
import 'assets/user/scss/home-page.scss';
import { 
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineMail,
    AiOutlinePhone
} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top__left">
                            <ul>
                                <li>
                                    <AiOutlineMail /> pizzato@gmail.com
                                </li>
                                <li>
                                    <AiOutlinePhone /> +012 345 6789
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top__right">
                            <ul>
                                <li>
                                    <Link to={""}><AiOutlineFacebook /></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineInstagram /></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineYoutube /></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineTwitter /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">LOGO</div>
                    <div className="col-xl-6 col-lg-6">MENU</div>
                    <div className="col-xl-3 col-lg-3">LOGIN</div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);