import { json } from "react-router-dom";
import burger from "../assets/images/foods/food_image_1.svg";
import { parse } from "postcss";

function BurgerCard({ bg, item }) {
  const imageStyle = `w-full bg-${bg ? "sand" : ""} rounded-[10px]`;

  function addItemToLocalCart() {
    let jsonValue = localStorage.getItem("cart");
    //om det inte finns en cart
    if (!jsonValue) {
      localStorage.setItem("cart", JSON.stringify(item));
    } else {
      let parsedValue = JSON.parse(jsonValue);
      let cart = [];
      if (parsedValue.length > 1) {
        cart.push(...parsedValue);
      } else {
        console.log(parsedValue);
        cart.push(parsedValue);

        console.log(cart);
      }
      cart.push(item);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  return (
    <div className="text-white bg-midnightblack bg-opacity-70 drop-shadow-md rounded-[23px] cursor-pointer">
      <img
        src={burger}
        alt=""
        className={imageStyle}
      />
      <div className="flex flex-col items-center mb-5">
        <h1>{item.price}</h1>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
      </div>
      <div>
        <button onClick={addItemToLocalCart}>Add</button>
        <button>favorite</button>
      </div>
    </div>
  );
}

export default BurgerCard;
