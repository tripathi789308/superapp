import React, { useState } from "react";
import RandExp from "randexp";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);

  const calculateStrength = () => {
    //
  };

  const generatePassword = (
    includeUppercase,
    includeLowercase,
    includeNumber,
    includeSymbol
  ) => {
    const uppercases = "A-Z";
    const lowercases = "a-z";
    const numbers = "0-9";
    const symbols = "!@#$&()\\-.+,";
    let base = "[";
    if (includeLowercase) base = base + lowercases;
    if (includeUppercase) base = base + uppercases;
    if (includeNumber) base = base + numbers;
    if (includeSymbol) base = base + symbols;
    if (passwordLength) base = base + `]{${passwordLength}}`;
    const regex = new RegExp(base);
    const string = new RandExp(regex).gen();
    setPassword(string);
  };

  return {
    password,
    setPassword,
    passwordLength,
    setPasswordLength,
    generatePassword,
    calculateStrength,
  };
};
