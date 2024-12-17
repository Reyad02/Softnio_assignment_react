import PropTypes from "prop-types";

const Checkout_Section = ({ cart, totalQuantity, setModalView, modelView }) => {
  return (
    <section
      className={`items-center justify-center pt-5 pb-5 my-10 ${
        cart?.length > 0 && !modelView ? "flex" : "hidden"
      }`}
      id="checkout"
    >
      <button
        onClick={() => {
          setModalView(true);
        }}
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
  );
};

Checkout_Section.propTypes = {
  cart: PropTypes.array,
  totalQuantity: PropTypes.number,
  modelView: PropTypes.bool,
  setModalView: PropTypes.func,
};

export default Checkout_Section;
