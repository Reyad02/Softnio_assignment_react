import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="flex py-1 gap-2 items-center">
      <FaStar className="text-[#FFD200]" />
      <FaStar className="text-[#FFD200]" />
      <FaStar className="text-[#FFD200]" />
      <FaStarHalfAlt className="text-[#FFD200]" />
      <FaRegStar className="text-[#FFD200]" />
      <p className="text-sm text-[#8091A7]">(2 Reviews)</p>
    </div>
  );
};

export default Rating;
