import { useNavigate } from "react-router-dom";

function CTA_button({ text, fontSize, borderColor, bgColor, w, h, link }) {
  const navigate = useNavigate();

  const styles = `
    text-white 
    uppercase 
    ${borderColor ? "border-solid border-2" : null}  
    px-[20px] 
    py-[7px] 
    bg-${bgColor ? bgColor : "transparent"} 
    border-${borderColor ? borderColor : "none"} 
    rounded-[32px] 
    w-[${w}px] 
    h-[${h}px]
    text-[${fontSize ? fontSize : ""}px]
    `;

  return (
    <button
      className={styles}
      onClick={() => navigate(`${link}`)}
    >
      {text}
    </button>
  );
}

export default CTA_button;
