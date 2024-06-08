import burger from "../assets/images/foods/food_image_1.svg";

function BurgerCard({ bg, item }) {
  const imageStyle = `w-full bg-${bg ? "sand" : ""} rounded-[10px]`;
  let cartItem = {
    item_id: item.id,
    count: 1,
  };
  function addItemToLocalCart() {
    let item_is_added = false;
    if (localStorage.getItem("cart")) {
      console.log("finns");
      let res = localStorage.getItem("cart");
      let cart = JSON.parse(res);

      cart.map((i) => {
        parseInt(i.item_id) == parseInt(item.id)
          ? increaseItemCount(i, true)
          : i;
      });

      console.log(item_is_added);
      if (item_is_added == false) {
        console.log("item ska läggas till");
        cart.push(cartItem);
        console.log(cart);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      console.log("finns ej");

      localStorage.setItem("cart", JSON.stringify([cartItem]));
    }

    function increaseItemCount(item, type) {
      type ? item.count++ : item.count--;
      item_is_added = true;
    }

    function updateCart() {}
    //annars om det finns en cart, parse:a carten och kolla om objekt med item.id = id jag vill lägga till, isåfall öka det objektets count med 1
    //om det inte finns något item med det id:et, kopiera carten och sätt till en ny version av carten, och pusha ett nytt objekt med id och count
    //skriv över den dåvarande carten med den nya carten, med att stringify:a den
  }
  return (
    <div className="flex flex-col text-white bg-midnightblack bg-opacity-70 drop-shadow-md rounded-[23px] cursor-pointer">
      <img
        src={burger}
        alt=""
        className={imageStyle}
      />
      <div className="flex flex-col items-center mb-5">
        <h1>{item.price} kr</h1>
        <h3>{item.title}</h3>
        <span className="text-sm">{item.description}</span>
      </div>
      <div className="mt-auto mx-auto">
        <button
          className="mr-2 px-2 py-1 border-solid border-2 border-orange active:bg-orange rounded-xl"
          onClick={addItemToLocalCart}
        >
          Add
        </button>
        <button className="px-2 py-1 border-solid border-2 border-orange active:bg-orange rounded-xl">
          favorite
        </button>
      </div>
    </div>
  );
}

export default BurgerCard;
