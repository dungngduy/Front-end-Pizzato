import { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "assets/user/scss/category-page.scss";
import BannerDetail from "./banner-detail";
import DetailProduct from "./detail-product";
import SimilarProducts from "./similar-product"
import AxiosInstance from "utils/apiServers";
import { Helmet } from "react-helmet-async";

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        AxiosInstance.get(`/detail/${id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <>
            <Helmet>
                <title>{product?.name ? `${product.name} - Pizzato` : "Loading..."}</title>
                <meta name="description" content="Đây là trang chi tiết món ăn của website." />
            </Helmet>
            <main>
                {/* Banner Category */}
                <BannerDetail />
                {/* List Product */}
                <DetailProduct />
                {/* sản phẩm tươn tự*/}
                <SimilarProducts />
            </main>
        </>
    );
};

export default memo(DetailPage);