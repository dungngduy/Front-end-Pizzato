import { memo } from "react";
import 'assets/user/scss/home-page.scss';
import FooterContainer from "./footer-container";
import FooterCopyright from "./footer-copyright";

const Footer = () => {
    return (
        <footer>
            <FooterContainer />
            <FooterCopyright />
        </footer>
    );
};

export default memo(Footer);