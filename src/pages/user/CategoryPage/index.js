import { memo } from "react";
import BannerCategory from "./banner-category";
import "assets/user/scss/category-page.scss"; 
import ListProduct from "./list-product";

const CategoryPage = () => {
    return (
        <main>
            {/* Banner Category */}
            <BannerCategory />

            {/* List Product */}
            <ListProduct />
        </main>
    );
};

export default memo(CategoryPage);