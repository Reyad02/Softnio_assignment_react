const Size_Unit = ({ size, setSize, unitPrice, setUnitPrice }) => {
  return (
    <div className="pt-5 flex flex-col gap-2.5">
      <p className="text-[#364A63] font-bold text-xl">Wrist Size</p>
      <div className="flex gap-5">
        <button
          onClick={() => {
            setSize("S"), setUnitPrice(69);
          }}
          className={` border pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded  size ${
            size === "S" && unitPrice === 69
              ? "border-[#6576FF] text-[#6576FF]"
              : " border-[#DBDFEA] text-[#364A63]"
          }`}
        >
          S <span className="font-normal text-[#8091A7] price">$69</span>
        </button>
        <button
          onClick={() => {
            setSize("M"), setUnitPrice(79);
          }}
          className={`border pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded text-[#364A63] size ${
            size === "M" && unitPrice === 79
              ? "border-[#6576FF] text-[#6576FF]"
              : " border-[#DBDFEA] text-[#364A63]"
          }`}
        >
          M <span className="font-normal text-[#8091A7] price">$79</span>
        </button>
        <button
          onClick={() => {
            setSize("L"), setUnitPrice(89);
          }}
          className={`border pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded size ${
            size === "L" && unitPrice === 89
              ? "border-[#6576FF] text-[#6576FF]"
              : " border-[#DBDFEA] text-[#364A63]"
          }`}
        >
          L <span className="font-normal text-[#8091A7] price">$89</span>
        </button>
        <button
          onClick={() => {
            setSize("XL"), setUnitPrice(99);
          }}
          className={`border pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded size ${
            size === "XL" && unitPrice === 99
              ? "border-[#6576FF] text-[#6576FF]"
              : " border-[#DBDFEA] text-[#364A63]"
          }`}
        >
          XL <span className="font-normal text-[#8091A7] price">$99</span>
        </button>
      </div>
    </div>
  );
};

export default Size_Unit;
