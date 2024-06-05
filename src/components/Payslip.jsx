import OrderItemsContainer from "./OrderItemsContainer";

function Payslip({ setReviewOrderDetails, orderState }) {
  return (
    <div className="bg-gradient-to-r from-bgblue from-3% to-orange to-100% rounded-[26px] py-2 px-2 max-w-96 h-full">
      <div className="bg-coal text-white rounded-[26px] h-full w-full py-5 px-4">
        {/* gap bestämmer bredden på diven */}
        <div className="flex justify-between gap-10">
          <button className="flex text-[10px] flex-col items-center px-3 py-2 rounded-xl border-orange border-solid border-2">
            <span className="text-lg">Deliver</span>
            Standard ~ 20 min
          </button>
          <button className="flex text-[10px] flex-col items-center px-3 py-2 rounded-xl border-orange border-solid border-2">
            <span className="text-lg">Drone</span>
            Standard ~ 40 min
          </button>
        </div>

        <OrderItemsContainer
          setReviewOrderDetails={setReviewOrderDetails}
          orderState={orderState}
        />
      </div>
    </div>
  );
}

export default Payslip;
