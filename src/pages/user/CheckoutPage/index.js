import { memo } from "react";
import BannerCheckout from "./banner-checkout";
import BoxLeft from "./box-left";
import "assets/user/scss/checkout.scss";
import BoxRight from "./box-right";

const Checkout = () => {
    return (
        <div>
            {/* Banner Checkout */}
            <BannerCheckout />
            <div className="container checkout-box__container">
                <form action="" method="post">
                    <div className="flex w-full">
                        <BoxLeft />
                        <BoxRight />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default memo(Checkout);