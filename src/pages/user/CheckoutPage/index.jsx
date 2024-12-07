import { memo, useState } from "react";
import { Helmet } from "react-helmet-async";
import BannerCheckout from "./banner-checkout";
import BoxLeft from "./box-left";
import "assets/user/scss/checkout.scss";
import BoxRight from "./box-right";
import { AddressProvider } from "components/address";

const CheckoutPage = () => {
    const [shippingFee, setShippingFee] = useState(40000);
    const [selectedPayment, setSelectedPayment] = useState("cash");
    const [selectedAddress, setSelectedAddress] = useState(null);

    return (
        <>
            <Helmet>
                <title>Thang toán - Pizzato</title>
                <meta name="description" content="Đây là trang thanh toán của website." />
            </Helmet>
            <div>
                <AddressProvider>
                    {/* Banner Checkout */}
                    <BannerCheckout />
                    <div className="container checkout-box__container">
                        <form action="" method="post">
                            <div className="flex w-full">
                                <BoxLeft
                                    setShippingFee={setShippingFee}
                                    selectedPayment={selectedPayment}
                                    setSelectedPayment={setSelectedPayment}
                                    setSelectedAddress={setSelectedAddress}
                                />
                                <BoxRight shippingFee={shippingFee} selectedPayment={selectedPayment} selectedAddress={selectedAddress} />
                            </div>
                        </form>
                    </div>
                </AddressProvider>
            </div>
        </>
    );
}

export default memo(CheckoutPage);