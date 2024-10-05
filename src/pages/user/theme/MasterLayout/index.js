import { memo, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../Header";
import Footer from "../Footer";

const MasterLayout = ({ children, ...props }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);