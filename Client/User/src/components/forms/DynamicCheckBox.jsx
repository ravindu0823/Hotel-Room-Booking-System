import PropTypes from "prop-types";

const DynamicCheckbox = ({ label, selectedOptions, onChange, options }) => {
  return (
    <div className="mb-6 flex flex-wrap">
      <div className="w-full px-3">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
          {label}
        </label>
        <div className="flex">
          {options.map((option) => (
            <label key={option.value} className="mr-4">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={onChange}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

DynamicCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default DynamicCheckbox;
