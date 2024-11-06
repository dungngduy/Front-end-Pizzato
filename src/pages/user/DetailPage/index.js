import { memo } from "react";
import "assets/user/scss/category-page.scss"; 
import BannerDetail from "./banner-detail";
import DetailProduct from "./detail-product";
import SimilarProducts from "./simliar-product"

const DetailPage = () => {
    return (
        <main>
            {/* Banner Category */}
            <BannerDetail />
            {/* List Product */}
            <DetailProduct />
            {/* sản phẩm tươn tự*/}
            <SimilarProducts />
        </main>
    );
};

export default memo(DetailPage);