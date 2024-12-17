import purple from "../../assets/purple.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Type_Model from "../../Components/Type_Model/Type_Model";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Color from "../../Components/Color/Color";
import Size_Unit from "../../Components/Size_Unit/Size_Unit";

const Detail = () => {
  const [image, setImage] = useState(purple);
  const [size, setSize] = useState("S");
  const [unitPrice, setUnitPrice] = useState(69);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [color, setColor] = useState("Purple");
  const title = "Classy Modern Smart watch";

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const createData = (title, image, color, size, quantity, unitPrice) => {
    const item = {
      name: title,
      image: image,
      color: color,
      size: size,
      quantity: quantity,
      price: quantity * unitPrice,
    };
    return item;
  };

  const totalQuantity = cart.reduce((total, item) => total+item.quantity, 0)  
  
  return (
    <div className="max-w-7xl mx-auto font-roboto pt-2">
      {/* content part */}
      <div className="flex gap-[60px] items-center">
        {/* image part  */}
        <div className="flex-1">
          <img src={image} className="rounded" alt="" />
        </div>
        {/* product details part  */}
        <div className="flex-1">
          {/* title */}
          <h2 className="py-3 text-[#364A63] font-bold text-[40px]">{title}</h2>
          {/* rating  */}
          <div className="flex py-1 gap-2 items-center">
            <FaStar className="text-[#FFD200]" />
            <FaStar className="text-[#FFD200]" />
            <FaStar className="text-[#FFD200]" />
            <FaStarHalfAlt className="text-[#FFD200]" />
            <FaRegStar className="text-[#FFD200]" />
            <p className="text-sm">(2 Reviews)</p>
          </div>
          {/* price tag */}
          <div className="flex gap-1 pt-5 items-end">
            <p className="text-[#8091A7] text-xl line-through">$99.00</p>
            <p className="text-[#6576FF] text-2xl font-bold">$79.00</p>
          </div>
          {/* description */}
          <div className="pt-4 pr-1">
            <p className="text-[#8091A7] text-lg">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching.
            </p>
          </div>
          {/* type and model */}
          <div className="pt-5 pb-1 flex gap-11">
            <div>
              <Type_Model title="Type" description="Watch" />
            </div>
            <div>
              <Type_Model title="Model Number" description="Forerunner 290XT" />
            </div>
          </div>
          {/* color */}
          <Color image={image} setImage={setImage} setColor={setColor} />

          {/* size */}
          <Size_Unit
            size={size}
            setSize={setSize}
            unitPrice={unitPrice}
            setUnitPrice={setUnitPrice}
          />

          {/* quantity and cart */}
          <div className="pt-5 flex gap-[10px] items-center">
            <div className="flex items-center text-[#8091A7]">
              <button
                onClick={() => handleDecrement()}
                className="pt-2 pb-2 pl-2 pr-2 border border-[#DBDFEA] border-r-0 rounded-l"
              >
                <FaMinus />
              </button>
              <p
                id="quantity"
                className="text-[#364A63] border border-[#DBDFEA] pt-1 pb-1 pl-[26px] pr-[26px]"
              >
                {quantity}
              </p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="pt-2 pb-2 pl-2 pr-2 border border-[#DBDFEA] border-l-0 rounded-r"
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={() => {
                if (quantity > 0) {
                  const newItem = createData(
                    title,
                    image,
                    color,
                    size,
                    quantity,
                    unitPrice
                  );
                  setCart([...cart, newItem]);
                }
              }}
              id="cart"
              className="bg-[#6576FF] text-white font-bold pt-2 pb-2 pl-[18px] pr-[18px] rounded text-sm"
            >
              Add to Cart
            </button>
            <button>
              <i
                className="fa-regular fa-heart text-[#6576FF]"
                id="favorite"
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* checkout btn section */}
      <section
        className={`items-center justify-center pt-5 pb-5 my-10 ${cart.length>0? "flex":"hidden"}`}
        id="checkout"
      >
        <button
          id="checkoutBtn"
          className="rounded-[20px] flex bg-[#FFBB5A] text-[#364A63] pt-2 pb-2 pr-6 pl-6 gap-[10px] items-center justify-center text-sm font-bold"
        >
          Checkout
          <span
            id="totalQuantity"
            className="bg-white pt-[2px] pb-[2px] pl-[6px] pr-[6px] text-[12px] rounded"
          >
            {totalQuantity}
          </span>
        </button>
      </section>
    </div>
  );
};

export default Detail;
