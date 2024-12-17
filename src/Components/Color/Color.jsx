import purple from "../../assets/purple.png";
import black from "../../assets/black.png";
import blue from "../../assets/blue.png";
import cyan from "../../assets/cyan.png";
import PropTypes from 'prop-types'; 

const Color = ({image, setImage, setColor}) => {
  return (
    <div className="pt-5 flex flex-col gap-2.5 items-center md:items-start">
      <p className="text-[#364A63] font-bold text-xl">Band Color</p>
      <div className="flex gap-5 items-center">
        <div
          className={`rounded-full p-1 ${
            image !== purple ? "" : "border-2 border-[#816BFF]"
          }`}
        >
          <div
            className="w-4 h-4 bg-[#816BFF] rounded-full cursor-pointer"
            onClick={() => {setImage(purple), setColor("Purple")}}
          ></div>
        </div>

        <div
          className={` rounded-full p-1 ${
            image !== cyan ? "" : "border-2 border-[#1FCEC9]"
          }`}
        >
          <div
            className="w-4 h-4 bg-[#1FCEC9] rounded-full cursor-pointer"
            onClick={() => {setImage(cyan), setColor("Cyan")}}
          ></div>
        </div>
        <div
          className={` rounded-full p-1 ${
            image !== blue ? "" : "border-2 border-[#4B97D3]"
          }`}
        >
          <div
            className="w-4 h-4 bg-[#4B97D3] rounded-full cursor-pointer"
            onClick={() => {setImage(blue), setColor("Blue")}}
          ></div>
        </div>
        <div
          className={` rounded-full p-1 ${
            image !== black ? "" : "border-2 border-[#3B4747]"
          }`}
        >
          <div
            className="w-4 h-4 bg-[#3B4747] rounded-full cursor-pointer"
            onClick={() => {setImage(black), setColor("Black")}}
          ></div>
        </div>
      </div>
    </div>
  );
};

Color.propTypes = {
  image: PropTypes.string,
  setColor: PropTypes.func,
  setImage: PropTypes.func,
};

export default Color;
