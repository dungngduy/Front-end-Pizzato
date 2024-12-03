import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import Contact from "./contact";
const ContactPage = () => {
    return (
        <main>
            <Contact/>
        </main>
    );
};

export default memo(ContactPage);