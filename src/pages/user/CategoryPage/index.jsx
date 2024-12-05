import { memo } from "react";
import { Helmet } from "react-helmet-async";
import BannerCategory from "./banner-category";
import "assets/user/scss/category-page.scss";
import ListProduct from "./list-product";

const CategoryPage = () => {
    return (
        <>
            <Helmet>
                <title>Danh sách món ăn - Pizzato</title>
                <meta name="description" content="Đây là trang danh sách món ăn của website." />
            </Helmet>
            <main>
                {/* Banner Category */}
                <BannerCategory />

                {/* List Product */}
                <ListProduct />
            </main>
        </>
    );
};

export default memo(CategoryPage);