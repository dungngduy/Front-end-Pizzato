import { memo } from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube
} from 'react-icons/ai';
import { Link } from "react-router-dom";

const FooterCopyright = () => {
    return (
        <div className="footer__copyright">
            <div className="container">
                <div className="row footer__copyright">
                    <div className="col-xl-6 footer__copyright__text">
                        <ul>
                            <li>Copyright © 2024. All rights reserved</li>
                        </ul>
                    </div>
                    <div className="col-xl-6">
                        <div className="footer__copyright__icons">
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
        </div>  
    );
};

export default memo(FooterCopyright);