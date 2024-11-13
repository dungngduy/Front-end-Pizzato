import { memo, useState } from "react";
import BannerCheckout from "./banner-checkout";
import BoxLeft from "./box-left";
import "assets/user/scss/checkout.scss";
import BoxRight from "./box-right";

const CheckoutPage = () => {
    const [shippingFee, setShippingFee] = useState(40000);
    const [selectedPayment, setSelectedPayment] = useState(null);

    return (
        <div>
            {/* Banner Checkout */}
            <BannerCheckout />
            <div className="container checkout-box__container">
                <form action="" method="post">
                    <div className="flex w-full">
                        <BoxLeft
                            setShippingFee={setShippingFee}
                            selectedPayment={selectedPayment}
                            setSelectedPayment={setSelectedPayment}
                        />
                        <BoxRight shippingFee={shippingFee} selectedPayment={selectedPayment} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default memo(CheckoutPage);