import { memo } from "react";
import {
    PiChefHatBold,
    PiMoneyWavyBold
} from "react-icons/pi";
import { MdFastfood } from "react-icons/md";

const ChooseFood = () => {
    return (
        <div className="row choose__food">
            <div className="col-xl-6 left__choose__food__box">
                <div className="choose__food__image" data-aos="fade-up">
                    <img src="/assets/images/pizza-choose.jpeg" alt="Choose food" />
                    <div className="choose__food__content" data-aos="fade-right">
                        <p>
                            HHT - Pizza là món ăn đặc trưng của nền ẩm thực nước Ý,
                            nhưng thực tế, nó được cả thế giới ưa chuộng. Thậm chí, người dân
                            ở nhiều nước khác còn ăn pizza nhiều hơn cả người Ý luôn! Vì sao lại thế?
                        </p>
                        <h4>Nguyễn Duy Dũng</h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 right__choose__food__box">
                <h4 data-aos="fade-left">Vì sao bạn nên lựa chọn Pizzato?</h4>
                <h2 data-aos="fade-left">Con người chúng ta bị hấp dẫn bởi những món ăn nhiều chất béo, ngọt, đậm đà và nhiều hương vị</h2>
                <p className="outside__text" data-aos="fade-left">
                    Hiện nay, bánh Pizza đã và đang trở thành món ăn quen thuộc với nhiều gia đình tại Việt Nam, đặc biệt
                    được phần đông giới trẻ rất yêu thích. Tuy nhiên, khi bạn đói hay quá bận rộn để vào bếp thì việc đặt
                    hàng và chờ đợi sẽ tốn khá nhiều thời gian và công sức. Vậy còn gì hấp dẫn hơn một chiếc Pizza cấp đông
                    của Pizzato ???
                </p>
                <div className="resson__choose">
                    <div className="resson__choose__content" data-aos="fade-left">
                        <div className="resson__choose__icon">
                            <MdFastfood />
                        </div>
                        <div className="resson__choose__text">
                            <h2>Chất lượng cao</h2>
                            <p>
                                Pizza của chúng tôi được làm từ nguyên liệu tươi ngon nhất, hương vị tuyệt vời
                                trong từng miếng. Kết hợp hoàn hảo với phô mai thơm ngon và các loại nhân đa dạng,
                                mang đến trải nghiệm ẩm thực tuyệt vời.
                            </p>
                        </div>
                    </div>
                    <div className="resson__choose__content" data-aos="fade-left">
                        <div className="resson__choose__icon">
                            <PiChefHatBold />
                        </div>
                        <div className="resson__choose__text">
                            <h2>Những đầu bếp chuyên nghiệp</h2>
                            <p>
                                Đầu bếp của chúng tôi là những chuyên gia ẩm thực dày dạn kinh nghiệm, tận tâm mang đến những chiếc pizza
                                thơm ngon và độc đáo, được chế biến theo công thức truyền thống và đầy sáng tạo.
                            </p>
                        </div>
                    </div>
                    <div className="resson__choose__content" data-aos="fade-left">
                        <div className="resson__choose__icon">
                            <PiMoneyWavyBold />
                        </div>
                        <div className="resson__choose__text">
                            <h2>Khuyến mãi cực khủng</h2>
                            <p>
                                Chúng tôi cung cấp pizza chất lượng cao với giá cả hợp lý, giúp bạn thưởng thức món ăn yêu thích mà không
                                lo về ngân sách.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ChooseFood);