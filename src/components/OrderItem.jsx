import foodImage from "../assets/images/foods/food_image_2.svg";

function OrderItem({ item }) {
  return (
    <div className="bg-coal flex items-center w-full my-4 pr-5 rounded-xl">
      <img
        className="bg-sand w-32 rounded-xl"
        src={foodImage}
        alt=""
      />
      <div className="ml-10">
        <h1>{item.title}</h1>
      </div>
      <span className="ml-auto">
        {item.count} st á {item.price} kr
      </span>
    </div>
  );
}

export default OrderItem;
