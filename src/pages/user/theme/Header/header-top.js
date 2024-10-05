import { memo } from "react";
import { 
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineMail,
    AiOutlinePhone,
} from 'react-icons/ai';
import { Link } from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top__left" data-aos="fade-right">
                        <ul>
                            <li>
                                <AiOutlineMail /> pizzato@gmail.com
                            </li>
                            <li>
                                <AiOutlinePhone /> +123 456 7890
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top__right" data-aos="fade-left">
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
    );
};

export default memo(HeaderTop);