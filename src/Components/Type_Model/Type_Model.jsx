import PropTypes from "prop-types";

const Type_Model = ({ title, description }) => {
  return (
    <div>
      <p className="text-sm text-[#8091A7]">{title}</p>
      <p className="text-[#364A63] font-bold">{description}</p>
    </div>
  );
};

Type_Model.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Type_Model;
