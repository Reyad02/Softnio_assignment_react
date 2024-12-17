import PropTypes from "prop-types";

const Modal = ({ modelView, setModalView, cart, totalQuantity, totalPrice }) => {
  return (
    <section
      id="cart-modal"
      className={` fixed items-center justify-center inset-0 bg-[#11121B8C] ${
        modelView ? "flex" : "hidden"
      }`}
    >
      <div className="m-auto">
        <div className="p-11 flex flex-col gap-4 rounded-[20px] bg-white">
          <h2 className="text-xl font-bold text-[#364A63]">Your Cart</h2>
          <table className="table-auto">
            <thead>
              <tr className="border-b border-[#DBDFEA] text-[#8091A7] text-sm">
                <th className="pt-1 pr-5 pb-2 text-left">Item</th>
                <th className="pt-1 pr-5 pb-2 text-center">Color</th>
                <th className="pt-1 pr-5 pb-2 text-center">Size</th>
                <th className="pt-1 pr-5 pb-2 text-center">Qnt</th>
                <th className="pt-1 pr-5 pb-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody id="cart-table-body">

              {cart?.map((item, index) => (
                <tr key={index} className="border-b text-sm text-[#364A63]">
                  <td className="flex gap-2 py-4 pr-5 items-center justify-start">
                    <img src={item.image} className="w-9 h-9 rounded" alt="" />
                    <p className="hidden md:block">{item.name}</p>
                  </td>
                  <td className="py-4 pr-5 text-center">{item.color}</td>
                  <td className="py-4 pr-5 text-center font-bold">
                    {item.size}
                  </td>
                  <td className="py-4 pr-5 text-center font-bold">
                    {item.quantity}
                  </td>
                  <td className="py-4 pr-5 text-right font-bold">
                    ${item.price}.00
                  </td>
                </tr>
              ))}

              <tr className="">
                <td className="flex gap-2 py-4 pr-5 items-center justify-start">
                  <p className="font-bold text-[#373737] w-full">Total</p>
                </td>

                <td className="py-4 pr-5 text-center font-bold"></td>
                <td className="py-4 pr-5 text-center font-bold"></td>
                <td className="py-4 pr-5 text-center font-bold text-sm text-[#364A63]">
                  {totalQuantity}
                </td>
                <td className="py-4 pr-5 text-right font-bold text-lg text-[#364A63]">
                  ${totalPrice}.00
                </td>
              </tr>


            </tbody>
          </table>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setModalView(false);
              }}
              id="continue"
              className="rounded border border-[#DBDFEA] text-[#364A63] py-2 px-[18px] text-sm font-bold"
            >
              Continue Shopping
            </button>
            <button className="rounded bg-[#6576FF] text-white py-2 px-[18px] text-sm font-bold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  modelView: PropTypes.bool,
  setModalView: PropTypes.func,
  cart: PropTypes.array,
  totalQuantity: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Modal;
