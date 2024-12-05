import { memo } from "react";
import { Helmet } from "react-helmet-async";
import "assets/user/scss/category-page.scss";
import Contact from "./policy";
import BannerContact from "./banner-contact";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Chính sách - Pizzato</title>
                <meta name="description" content="Đây là trang chính sách của website." />
            </Helmet>
            <main>
                <BannerContact />
                <Contact />
            </main>
        </>
    );
};

export default memo(ContactPage);