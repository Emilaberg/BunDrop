function CartItem({ i, handleRemove, handleAdd }) {
  return (
    <div
      key={i.item_id}
      className="flex items-center w-max mt-2"
    >
      <div className="flex">
        <span>-</span>
        <span>{i.title}</span>
      </div>
      <div className="ml-10">{i.count}st </div>
      <div className="flex ml-2 items-center border-solid border-2 border-orange px-2 rounded-xl">
        <div
          className="active:bg-orange p-1 cursor-pointer"
          onClick={() => handleRemove(i)}
        >
          -
        </div>
        <span className="mx-2">{i.count}</span>
        <div
          onClick={() => handleAdd(i)}
          className="active:bg-orange p-1 cursor-pointer"
        >
          +
        </div>
      </div>
      <div className="">{i.count * i.price} kr</div>
    </div>
  );
}

export default CartItem;
