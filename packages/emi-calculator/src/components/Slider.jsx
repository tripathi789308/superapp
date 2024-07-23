const Slider = ({
  value,
  setValue,
  step,
  maxRange,
  label,
  minRange,
  disabled = false,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <label>{minRange}</label>
        <label className="font-semibold text-base">
          {label} : {value}
        </label>
        <label>{maxRange}</label>
      </div>
      <input
        type="range"
        className="w-full"
        step={step}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        max={maxRange}
        min={minRange}
        disabled={disabled}
      />
    </div>
  );
};

export { Slider };
