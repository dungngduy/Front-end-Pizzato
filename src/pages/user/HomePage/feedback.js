import { memo } from "react";
import { Carousel, Rate } from 'antd';
import { MdOutlineFeedback } from "react-icons/md";

const Feedback = () => {
    return (
        <div data-aos="fade-up">
            <Carousel arrows infinite={true}>
                <div className="feedback__box">
                    <div className="row">
                        <div className="col-xl-6" data-aos="fade-right">
                            <div className="feedback__content">
                                <h2><strong>Phản hồi</strong> từ khách hàng</h2>
                                <div className="feedback__icon">
                                    <MdOutlineFeedback />
                                </div>
                                <p className="feedback__description">
                                    Pizza rất ngon! Vỏ bánh giòn tan, nhân đầy đặn và phô mai béo
                                    ngậy. Mình rất ấn tượng với sự tươi ngon của các nguyên liệu.
                                    Chắc chắn sẽ quay lại đặt thêm lần sau!
                                </p>
                                <div className="feedback__person">
                                    <div className="feedback__person__image">
                                        <img src="/assets/images/avt.jpeg" alt="Person 1" />
                                    </div>
                                    <div className="feedback__person__info">
                                        <div className="rating">
                                            <Rate disabled defaultValue={4} />
                                        </div>
                                        <h4>Nguyễn Duy Dũng</h4>
                                        <p>Khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6" data-aos="fade-left">
                            <div className="feedback__image">
                                <img src="/assets/images/feedback.jpg" alt="Feedback" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedback__box">
                    <div className="row">
                        <div className="col-xl-6" data-aos="fade-right">
                            <div className="feedback__content">
                                <h2><strong>Phản hồi</strong> từ khách hàng</h2>
                                <div className="feedback__icon">
                                    <MdOutlineFeedback />
                                </div>
                                <p className="feedback__description">
                                    Pizza rất ngon! Vỏ bánh giòn tan, nhân đầy đặn và phô mai béo
                                    ngậy. Mình rất ấn tượng với sự tươi ngon của các nguyên liệu.
                                    Chắc chắn sẽ quay lại đặt thêm lần sau!
                                </p>
                                <div className="feedback__person">
                                    <div className="feedback__person__image">
                                        <img src="/assets/images/avt.jpeg" alt="Person 1" />
                                    </div>
                                    <div className="feedback__person__info">
                                        <div className="rating">
                                            <Rate disabled defaultValue={4} />
                                        </div>
                                        <h4>Nguyễn Duy Dũng</h4>
                                        <p>Khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6" data-aos="fade-left">
                            <div className="feedback__image">
                                <img src="/assets/images/feedback.jpg" alt="Feedback" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedback__box">
                    <div className="row">
                        <div className="col-xl-6" data-aos="fade-right">
                            <div className="feedback__content">
                                <h2><strong>Phản hồi</strong> từ khách hàng</h2>
                                <div className="feedback__icon">
                                    <MdOutlineFeedback />
                                </div>
                                <p className="feedback__description">
                                    Pizza rất ngon! Vỏ bánh giòn tan, nhân đầy đặn và phô mai béo
                                    ngậy. Mình rất ấn tượng với sự tươi ngon của các nguyên liệu.
                                    Chắc chắn sẽ quay lại đặt thêm lần sau!
                                </p>
                                <div className="feedback__person">
                                    <div className="feedback__person__image">
                                        <img src="/assets/images/avt.jpeg" alt="Person 1" />
                                    </div>
                                    <div className="feedback__person__info">
                                        <div className="rating">
                                            <Rate disabled defaultValue={4} />
                                        </div>
                                        <h4>Nguyễn Duy Dũng</h4>
                                        <p>Khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6" data-aos="fade-left">
                            <div className="feedback__image">
                                <img src="/assets/images/feedback.jpg" alt="Feedback" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default memo(Feedback);