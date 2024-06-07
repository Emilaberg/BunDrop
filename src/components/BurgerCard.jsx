import burger from "../assets/images/foods/food_image_1.svg";

function BurgerCard({ bg, title, description, price }) {
  const imageStyle = `w-full bg-${bg ? "sand" : ""} rounded-[10px]`;
  return (
    <div className="text-white bg-midnightblack bg-opacity-70 drop-shadow-md rounded-[23px] cursor-pointer">
      <img
        src={burger}
        alt=""
        className={imageStyle}
      />
      <div className="flex flex-col items-center mb-5">
        <h1>{price}</h1>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default BurgerCard;
