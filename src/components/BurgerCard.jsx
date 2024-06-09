import burger from "../assets/images/foods/food_image_1.svg";
function BurgerCard({ bg, item, dbHook }) {
  const imageStyle = `w-full bg-${bg ? "sand" : ""} rounded-[10px]`;
  let cartItem = {
    item_id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    count: 1,
  };

  function handleClick() {
    console.log(dbHook);
    dbHook.add(cartItem);
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
          onClick={handleClick}
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
