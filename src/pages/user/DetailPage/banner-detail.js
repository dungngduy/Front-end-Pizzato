import Breadcrumb from 'components/breadcrumb';
import { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from 'utils/apiServers';
import { ROUTER } from 'utils/router';

const BannerDetail = () => {
    const breadcrumbItems = [
        { title: 'Trang chủ', url: ROUTER.USER.HOME },
        { title: 'Chi tiết món ăn', url: ROUTER.USER.DETAIL, className: 'focus__link' },
    ];

    const { id } = useParams();
    const [titleProduct, setTitleProduct] = useState(null);

    useEffect(() => {
        AxiosInstance.get(`/detail/${id}`)
            .then((res) => {
                setTitleProduct(res.data.pizza);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <Breadcrumb
            backgroundImage="/assets/images/breadcrumbs/breadcrumb-1.jpg"
            title={titleProduct?.name}
            items={breadcrumbItems}
        />
    );
};

export default memo(BannerDetail);