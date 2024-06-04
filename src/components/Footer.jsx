import NavLinks from "./NavLinks";
import Icon from "../assets/images/icons/Icon.svg";
function Footer() {
  return (
    <div className="text-white h-[254px] w-full flex justify-between items-center px-12 bg-gradient-to-r from-darkblue from-3% to-orange to-100% bg-opacity-20">
      <div className="flex flex-col">
        <NavLinks />
      </div>
      <img
        className="h-[72px] w-[72px]"
        src={Icon}
        alt="Icon"
      />
      <span>Copyright Bun Drop 2024</span>
    </div>
  );
}

export default Footer;
