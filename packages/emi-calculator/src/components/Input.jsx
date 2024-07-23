const Input = ({ label, type = "text", value, setValue, disabled = false }) => {
  return (
    <div className="flex gap-5 bg-transparent border-4">
      <label className="font-semibold text-base w-1/6">{label} : </label>
      <input
        className="px-2 bg-transparent w-5/6 border-none"
        type={type}
        value={value}
        onChange={setValue}
        disabled={disabled}
        width="100%"
      />
    </div>
  );
};

export { Input };
