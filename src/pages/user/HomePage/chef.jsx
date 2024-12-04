import { memo } from 'react';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// Dữ liệu giả cho 5 đầu bếp với ảnh từ mạng
const chefData = [
    {
        name: "Nguyễn Duy Dũng",
        position: "Đầu bếp chính",
        image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/4/4/1030748/IMG_0136.jpeg"
    },
    {
        name: "Trần Minh Tuấn",
        position: "Chuyên gia ẩm thực Á - Âu",
        image: "https://channel.mediacdn.vn/428462621602512896/2023/2/15/photo-1-16764379495661359554830.png"
    },
    {
        name: "Lê Hải Đăng",
        position: "Đầu bếp món Việt",
        image: "http://baodongnai.com.vn/dataimages/202104/original/images2362953_11a.jpg"
    },
    {
        name: "Phạm Thanh Tùng",
        position: "Chuyên gia món khai vị",
        image: "https://hocnauan.edu.vn/wp-content/uploads/2018/08/dau-bep-nau-mon-nhat.jpg"
    },
    {
        name: "Hoàng Thị Mai",
        position: "Đầu bếp món chay",
        image: "https://png.pngtree.com/thumb_back/fh260/background/20221020/pngtree-chef-tasting-her-food-background-apron-artistic-photo-image_4249020.jpg"
    }
];

const Chef = () => {
    return (
        <div
            className="sub__banner"
            data-aos="fade-up"
            style={{ backgroundImage: "url('/assets/images/sub-banner.webp')" }}
        >
            <div className="overlay__sub__banner">
                <div className="container">
                    <div className="sub__banner__flexbox" data-aos="fade-up">
                        <CarouselMulti
                            responsive={responsive}
                            infinite={true}
                            className="sub__banner__list"
                        >
                            {chefData.map((chef, index) => (
                                <div className="sub__banner__item" key={index}>
                                    <div className="infomation__chef">
                                        <img src={chef.image} alt={chef.name} className="w-full h-auto rounded-lg" />
                                        <div className="infomation__chef__name">
                                            <h3>{chef.name}</h3>
                                            <p>{chef.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CarouselMulti>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Chef);