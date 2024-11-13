import { memo } from "react";
import 'assets/user/scss/home-page.scss'; 
import Banner from "./banner";
import NewProduct from "./new-product";
import Category from "./category";
import ChooseFood from "./choose-food";
import Menu from "./menu";
import Chef from "./chef";
import Feedback from "./feedback";
import News from "./news";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <div className="container">
                {/* New Product */}
                <NewProduct />

                {/* Categories */}
                <Category />
                
                {/* Choose Food */}
                <ChooseFood />

                {/* Menu */}
                <Menu />
            </div>

            {/* Sub-banner */}
            <Chef />

            <div className="container">
                {/* Feedback */}
                <Feedback />
                
                {/* News */}
                <News />
            </div>
        </main>
    );
};

export default memo(HomePage);