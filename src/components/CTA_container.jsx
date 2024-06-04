import CTA_button from "./CTA_button";

function CTA_container() {
  return (
    <div
      id="orderHere"
      className="text-white text-center mt-96"
    >
      <h1 className=" text-8xl">Matsugen</h1>
      <h3 className="text-xl mt-3 capitalize font-light">
        tveka inte att kolla in våra menyer
      </h3>
      <div className="flex gap-10 justify-center mt-7">
        <CTA_button
          text="Vår Meny"
          fontSize={40}
          borderColor="orange"
          w={485}
          h={59}
        />
        <CTA_button
          text="Beställ nu"
          fontSize={40}
          bgColor="orange"
          w={385}
          h={59}
        />
      </div>
    </div>
  );
}

export default CTA_container;
