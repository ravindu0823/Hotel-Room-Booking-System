import { Option, Select } from "@material-tailwind/react";
import PropTypes from "prop-types";

const DynamicDropdown = ({ label, value, onChange, options }) => {
  return (
    <div className="mb-6 flex flex-wrap">
      <div className="w-full px-3">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
          {label}
        </label>
        {label === "Select the User" ? (
          <Select
            value={value}
            onChange={onChange}
            className="w-full rounded-md border-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            {options.map((option) => (
              <Option key={option._id} value={option._id}>
                {option.fullName}
              </Option>
            ))}
          </Select>
        ) : (
          <Select
            value={value}
            onChange={onChange}
            className="w-full rounded-md border-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        )}
      </div>
    </div>
  );
};

DynamicDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default DynamicDropdown;
