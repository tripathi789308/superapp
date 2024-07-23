import React, { useState } from "react";
import { usePasswordGenerator } from "../hooks";
import { Slider } from "../components";

const MainPage = () => {
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const { password, passwordLength, setPasswordLength, generatePassword } =
    usePasswordGenerator();
  const checkBoxes = [
    {
      label: "Include Uppercase Letters",
      onClick: (e) => setIncludeUppercase(e.target.checked),
      value: includeUppercase,
    },
    {
      label: "Include Lowercase Letters",
      onClick: (e) => setIncludeLowercase(e.target.checked),
      value: includeLowercase,
    },
    {
      label: "Include Number",
      onClick: (e) => setIncludeNumber(e.target.checked),
      value: includeNumber,
    },
    {
      label: "Include Symbols",
      onClick: (e) => setIncludeSymbol(e.target.checked),
      value: includeSymbol,
    },
  ];
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div className="w-9/12 flex flex-col gap-12">
        <div className="w-full h-1/12 bg-stone-500 text-xl">
          Password Generator
        </div>
        <div className="flex h-11/12 m-2 p-2 flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold font-sans">{password}</h1>
            <button
              onClick={handleCopy}
              className=" w-12 text-lg shadow-md font-semibold font-sans bg-blue-500"
            >
              Copy
            </button>
          </div>
          <div className="w-full">
            <Slider
              value={passwordLength}
              setValue={(value) => setPasswordLength(value)}
              label={"Character Length"}
              step={1}
              min={0}
              max={20}
            />
          </div>
          <div className="grid grid-col-2">
            {checkBoxes.map((item) => {
              return (
                <div className="flex flex-row gap-2">
                  <input
                    value={item.value}
                    defaultChecked={item.value}
                    type="checkbox"
                    onChange={item.onClick}
                  />
                  <label>{item.label}</label>
                </div>
              );
            })}
          </div>
          <div className="">
            <button
              onClick={() =>
                generatePassword(
                  includeUppercase,
                  includeLowercase,
                  includeNumber,
                  includeSymbol
                )
              }
              className="w-full shadow-md text-lg font-semibold font-sans bg-blue-500"
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainPage };
