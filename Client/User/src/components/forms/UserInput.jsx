import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const UserInput = ({
  label,
  value,
  onChange,
  placeholder,
  inputType,
  disabled,
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {label}
      </label>
      <Input
        type={inputType}
        disabled={disabled ? disabled : false}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 p-2 bg-white"
      />
    </div>
  );
};

UserInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default UserInput;
