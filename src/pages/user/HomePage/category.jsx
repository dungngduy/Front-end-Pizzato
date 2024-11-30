import { memo, useState, useEffect } from "react";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import AxiosInstance from "utils/apiServers";
import { formatImage } from "utils/format";

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
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        AxiosInstance.get('/categories')
            .then((res) => {
                setCategories(res.data.categories);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                    {
                        categories.map((category, index) => {
                            return (
                                <div key={index} className="categories__item" data-aos="zoom-in">
                                    <Link to="">
                                        <img src={formatImage(category.image)} alt={category.name} />
                                        <p>{category.name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </CarouselMulti>
            </div>
        </div>
    );
};

export default memo(Category);