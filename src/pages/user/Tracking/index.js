import { memo } from "react";
import "assets/user/scss/checkout.scss";
import OrderTracking from "./tracking";

const Tracking = () => {
    return (
        <OrderTracking/>
    );
}

export default memo(Tracking);