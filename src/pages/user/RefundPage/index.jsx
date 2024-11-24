import { memo } from "react";
import Refund from "./refund";
import "assets/user/scss/category-page.scss";

const RefundPage = () => {
  return (
    <main className="p-20">
      <Refund /> 
    </main>
  );
};

export default memo(RefundPage);
