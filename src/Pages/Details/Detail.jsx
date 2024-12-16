import image from "../../assets/purple.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Type_Model from "../../Components/Type_Model/Type_Model";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Detail = () => {
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
          <h2 className="py-3 text-[#364A63] font-bold text-[40px]">
            Classy Modern Smart watch
          </h2>
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
          <div className="pt-5 flex flex-col gap-2.5">
            <p className="text-[#364A63] font-bold text-xl">Band Color</p>
            <div className="flex gap-5">
              <div className="w-4 h-4 bg-[#816BFF] rounded-full"></div>
              <div className="w-4 h-4 bg-[#1FCEC9] rounded-full"></div>
              <div className="w-4 h-4 bg-[#4B97D3] rounded-full"></div>
              <div className="w-4 h-4 bg-[#3B4747] rounded-full"></div>
            </div>
          </div>
          {/* size */}
          <div className="pt-5 flex flex-col gap-2.5">
            <p className="text-[#364A63] font-bold text-xl">Wrist Size</p>
            <div className="flex gap-5">
              <button className=" border border-[#6576FF] pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded text-[#6576FF] size">
                S <span className="font-normal text-[#8091A7] price">$69</span>
              </button>
              <button className="border border-[#DBDFEA] pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded text-[#364A63] size">
                M <span className="font-normal text-[#8091A7] price">$79</span>
              </button>
              <button className="border border-[#DBDFEA] pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded text-[#364A63] size">
                L <span className="font-normal text-[#8091A7] price">$89</span>
              </button>
              <button className="border border-[#DBDFEA] pt-2 pb-2 pl-[18px] pr-[18px] font-bold rounded text-[#364A63] size">
                XL <span className="font-normal text-[#8091A7] price">$99</span>
              </button>
            </div>
          </div>
          {/* quantity and cart */}
          <div className="pt-5 flex gap-[10px] items-center">
            <div className="flex items-center text-[#8091A7]">
              <button
                // onclick="productQuantityDecrease()"
                className="pt-2 pb-2 pl-2 pr-2 border border-[#DBDFEA] border-r-0 rounded-l"
              >
                <FaMinus />
              </button>
              <p
                id="quantity"
                className="text-[#364A63] border border-[#DBDFEA] pt-1 pb-1 pl-[26px] pr-[26px]"
              >
                0
              </p>
              <button
                // onclick="productQuantityIncrease()"
                className="pt-2 pb-2 pl-2 pr-2 border border-[#DBDFEA] border-l-0 rounded-r"
              >
                <FaPlus />
              </button>
            </div>
            <button
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
        className="items-center justify-center pt-5 pb-5 flex my-10"
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
            0
          </span>
        </button>
      </section>
    </div>
  );
};

export default Detail;
