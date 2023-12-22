import { Radio } from "@material-tailwind/react";
import PropTypes from "prop-types";

const DynamicRadioButton = ({ label, onChange, options }) => {
  return (
    <>
      <div className="mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
            {label}
          </label>

          <div className="flex gap-10">
            {options.map((option) => (
              <Radio
                key={option.value}
                name="type"
                value={option.value}
                label={option.label}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

DynamicRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  // selectedOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default DynamicRadioButton;
