import AddedItem from "./AddedItem";

function OrderItemsContainer({ setReviewOrderDetails, orderState }) {
  return (
    <div className="mt-20 flex flex-col">
      <div>
        <h1 className="text-2xl mb-10">Your items</h1>
        <div>
          <AddedItem />
          <AddedItem />
          <AddedItem />
          <AddedItem />
        </div>

        <div className="bg-midnightblack p-2 mt-10">
          <div className="flex items-center">
            SubTotal:
            <span className="ml-auto">491 kr</span>
          </div>
          <div className="flex items-center">
            tax 25%:
            <span className="ml-auto">521 kr</span>
          </div>
          <div className="flex items-center">
            Standard delivery:
            <span className="ml-auto"> Drone</span>
          </div>
        </div>
      </div>

      <div className="bg-midnightblack mt-36 px-2 py-1">
        <div className="flex items-center">
          Total (inc. VAT)
          <span className="ml-auto">491 kr</span>
        </div>

        <button
          onClick={setReviewOrderDetails}
          className="bg-orange rounded-3xl text-center w-full mt-3 font-bold"
        >
          {orderState ? "Review order details" : "Cancel"}
        </button>
      </div>
    </div>
  );
}

export default OrderItemsContainer;