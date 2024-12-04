import { memo } from "react";
import "assets/user/scss/category-page.scss";
import OrderStatus from "./order-status";
const OrderStatusPage = () => {
  return (
    <main>
      <OrderStatus />
    </main>
  );
};

export default memo(OrderStatusPage);
