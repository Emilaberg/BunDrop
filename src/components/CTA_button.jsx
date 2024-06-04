function CTA_button({ text, fontSize, borderColor, bgColor, w, h }) {
  const styles = `
    text-white 
    uppercase 
    ${borderColor ? "border-solid border-2" : ""}  
    px-[20px] 
    py-[7px] 
    bg-${bgColor ? bgColor : "transparent"} 
    border-${borderColor ? borderColor : ""} 
    rounded-[32px] 
    w-[${w}px] 
    h-[${h}px]
    text-[${fontSize ? fontSize : ""}px]
    `;

  return (
    // <button className="text-white uppercase border-solid border-2 px-[20px] py-[7px] border-orange  rounded-[32px] w-[150px] h-[42]">
    <button className={styles}>{text}</button>
  );
}

export default CTA_button;
