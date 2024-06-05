import foodImage from "../assets/images/foods/food_image_2.svg";

function OrderItem() {
  return (
    <div className="bg-coal flex items-center w-full my-4 pr-5 rounded-xl">
      <img
        className="bg-sand w-32 rounded-xl"
        src={foodImage}
        alt=""
      />
      <div className="ml-10">
        <h1>Cheesy Croele</h1>
        <p>dip,cola</p>
      </div>
      <span className="ml-auto">89kr</span>
    </div>
  );
}

export default OrderItem;
