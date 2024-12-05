import { memo } from "react";
import { Helmet } from "react-helmet-async";
import "assets/user/scss/category-page.scss";
import BannerAbout from "./banner-about";
import About from "./about";
const IntroducePage = () => {
    return (
        <>
            <Helmet>
                <title>Giới thiệu - Pizzato</title>
                <meta name="description" content="Đây là trang giới thiệu của website." />
            </Helmet>
            <main>
                {/* Banner About */}
                <BannerAbout />

                {/* About */}
                <About />
            </main>
        </>
    );
};

export default memo(IntroducePage);
