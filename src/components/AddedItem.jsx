function AddedItem() {
  return (
    <div className="flex items-center">
      <span>-</span>
      <div className="ml-2 mr-auto flex flex-col">
        Creole Cheese
        <span className="ml-2">89kr</span>
      </div>
      <div className="border-solid border-2 border-orange flex px-2 rounded-xl">
        <div className="cursor-pointer">-</div>
        <span className="mx-[15px]">1</span>
        <div className="cursor-pointer">+</div>
      </div>
    </div>
  );
}

export default AddedItem;
