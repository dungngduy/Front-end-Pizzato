import { memo } from 'react';
import { Carousel } from 'antd';

const Banner = () => {
    return (
        <nav className="carousel">
            <Carousel autoplay>
                <div className="carousel__item">
                    <img src="/assets/images/banners/banner-1.webp" alt="Banner-1" />
                </div>
                <div className="carousel__item">
                    <img src="/assets/images/banners/banner-2.jpg" alt="Banner-2" />
                </div>
                <div className="carousel__item">
                    <img src="/assets/images/banners/banner-3.jpg" alt="Banner-3" />
                </div>
            </Carousel>
        </nav>
    );
};

export default memo(Banner);