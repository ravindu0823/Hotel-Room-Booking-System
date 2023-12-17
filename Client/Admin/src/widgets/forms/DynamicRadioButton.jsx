import { Radio } from "@material-tailwind/react";

const DynamicRadioButton = ({ label, selectedOptions, onChange, options }) => {
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
                name="type"
                value={option.value}
                label={option.label}
                onChange={onChange}
              />
            ))}

            {/*<Radio name="type" label="React" />*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicRadioButton;
