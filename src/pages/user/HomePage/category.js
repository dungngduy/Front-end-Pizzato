import { memo } from "react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

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

const Category = () => {
    return (
        <div className="row categories__container">
            <div className="col-xl-12">
                <h2 className="categories__title" data-aos="fade-up">Danh mục</h2>
                <h4 className="categories__description" data-aos="fade-up">Chọn thực đơn món ăn</h4>
                <CarouselMulti 
                    responsive={responsive}
                    autoPlaySpeed={3000}
                    autoPlay={true}
                    infinite={true}
                    arrows={false}
                    className="categories__list"
                >
                    <div className="categories__item" data-aos="zoom-in">
                        <Link to="">
                            <img src="/assets/images/categories/category-1.jpeg" alt="Danh mục 1" />
                            <p>Danh mục 1</p>
                        </Link>
                    </div>
                    <div className="categories__item" data-aos="zoom-in">
                        <Link to="">
                            <img src="/assets/images/categories/category-2.jpg" alt="Danh mục 2" />
                            <p>Danh mục 2</p>
                        </Link>
                    </div>
                    <div className="categories__item" data-aos="zoom-in">
                        <Link to="">
                            <img src="/assets/images/categories/category-3.jpg" alt="Danh mục 3" />
                            <p>Danh mục 3</p>
                        </Link>
                    </div>
                    <div className="categories__item" data-aos="zoom-in">
                        <Link to="">
                            <img src="/assets/images/categories/category-4.jpeg" alt="Danh mục 4" />
                            <p>Danh mục 4</p>
                        </Link>
                    </div>
                    <div className="categories__item" data-aos="zoom-in">
                        <Link to="">
                            <img src="/assets/images/categories/category-5.jpg" alt="Danh mục 5" />
                            <p>Danh mục 5</p>
                        </Link>
                    </div>
                </CarouselMulti>
            </div>
        </div>
    );
};

export default memo(Category);