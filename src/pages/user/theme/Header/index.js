import { memo } from "react";
import HeaderTop from "./header-top";
import HeaderMenu from "./header-menu";
import Sticky from 'react-stickynode';
import 'assets/user/scss/home-page.scss';

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <Sticky
                enabled={true}
                enableTransforms={true}
                className="sticky-active"
            >
                <HeaderMenu />
            </Sticky>
        </header>
    );
};

export default memo(Header);