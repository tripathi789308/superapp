import React from "react";

const Slider = ({ value, setValue, max, min, label, step }) => {
  return (
    <div className="flex gap-10 flex-col w-full">
      <div className="flex justify-between flex-column">
        <label className="text-xl font-xl font-sans font-semibold">
          {label}
        </label>
        <label className="text-xl font-xl font-sans font-semibold">
          {value}
        </label>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <label>{0}</label>
          <label>{20}</label>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export { Slider };
