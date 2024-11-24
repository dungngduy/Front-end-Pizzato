import { memo, useContext } from "react";
import { CartContext } from "components/add-to-cart";

const PaymentSuccessPage = () => {
    const { cart, removeItemsAfterPayment } = useContext(CartContext);
    const selectedItems = cart.filter(item => item.selected);

    removeItemsAfterPayment(selectedItems);

    return (
        <div className="container">
            <h1 className="text-center">Thanh toán thành công</h1>
        </div>
    );
};

export default memo(PaymentSuccessPage);