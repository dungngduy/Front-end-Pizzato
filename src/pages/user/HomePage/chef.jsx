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

const Chef = () => {
    return (
        <div className="sub__banner" data-aos="fade-up" style={{ backgroundImage: "url('/assets/images/sub-banner.webp')" }}>
            <div className="overlay__sub__banner">
                <div className="container">
                    <div className="sub__banner__flexbox" data-aos="fade-up">
                        <CarouselMulti 
                            responsive={responsive}
                            infinite={true}
                            className="sub__banner__list"
                        >
                            <div className="sub__banner__item">
                                <div className="infomation__chef">
                                    <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                    <div className="infomation__chef__name">
                                        <h3>Nguyễn Duy Dũng</h3>
                                        <p>Đầu bếp chính</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sub__banner__item">
                                <div className="infomation__chef">
                                    <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                    <div className="infomation__chef__name">
                                        <h3>Nguyễn Duy Dũng</h3>
                                        <p>Đầu bếp chính</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sub__banner__item">
                                <div className="infomation__chef">
                                    <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                    <div className="infomation__chef__name">
                                        <h3>Nguyễn Duy Dũng</h3>
                                        <p>Đầu bếp chính</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sub__banner__item">
                                <div className="infomation__chef">
                                    <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                    <div className="infomation__chef__name">
                                        <h3>Nguyễn Duy Dũng</h3>
                                        <p>Đầu bếp chính</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sub__banner__item">
                                <div className="infomation__chef">
                                    <img src="/assets/images/our-chef.jpg" alt="Our Chef" />
                                    <div className="infomation__chef__name">
                                        <h3>Nguyễn Duy Dũng</h3>
                                        <p>Đầu bếp chính</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselMulti>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Chef);