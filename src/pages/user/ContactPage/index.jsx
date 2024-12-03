import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import Contact from "./contact";
import BannerContact from "./banner-contact";
const ContactPage = () => {
    return (
        <main>
            <BannerContact/>
            <Contact/>
        </main>
    );
};

export default memo(ContactPage);