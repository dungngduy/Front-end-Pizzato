import { memo } from "react";
import HeaderTop from "./header-top";
import HeaderMenu from "./header-menu";
import 'assets/user/scss/home-page.scss';

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderMenu />
        </header>
    );
};

export default memo(Header);