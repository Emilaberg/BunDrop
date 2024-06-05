import { useState } from "react";
import OrderItem from "../components/OrderItem";
import Payslip from "../components/Payslip";
function OrderPage() {
  const [reviewOrderDetails, setReviewOrderDetails] = useState(true);

  function reviewOrder() {
    setReviewOrderDetails(!reviewOrderDetails);
  }

  return (
    <div className="bg-midnightblack px-72 py-60 text-white">
      <h1>Min Order</h1>
      <div className="flex justify-between">
        {reviewOrderDetails ? (
          <div className="flex-grow mr-20">
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        ) : (
          <div>
            <h1>Bun drop</h1>
            <p>Vi arbetar bla bla bla</p>
            <div>
              <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </form>
            </div>
          </div>
        )}

        <Payslip
          setReviewOrderDetails={reviewOrder}
          orderState={reviewOrderDetails}
        />
      </div>
    </div>
  );
}

export default OrderPage;
