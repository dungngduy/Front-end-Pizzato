import { memo, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MasterLayout = ({ children, ...props }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]); 

    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);