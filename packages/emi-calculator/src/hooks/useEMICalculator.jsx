import { useCallback, useMemo, useState } from "react";

const tenures = [12, 24, 36, 48, 60, 72];

const useEmiCalculator = () => {
  const [cost, setCost] = useState(0);
  const [rate, setRate] = useState(0);
  const [processFee, setProcessFee] = useState(0);
  const [dp, setDP] = useState(0);
  const [tenure, setTenure] = useState(12);

  const totalLoanAmout = useMemo(() => {
    const c = Number(cost);
    return c + (processFee * c) / 100 - dp;
  }, [cost, processFee, dp]);

  const maxDP = useMemo(() => {
    const c = Number(cost);
    const extraAmout = (processFee * c) / 100;
    return c + extraAmout;
  }, [cost, processFee]);

  const calculateEmi = (tenure, loanAmout, rate) => {
    const principal = rate === 0 ? loanAmout : loanAmout * rate;
    const ratePowerN = Math.pow(1 + rate, tenure);

    return ratePowerN === 1
      ? Math.ceil(principal / tenure)
      : Math.ceil((principal * ratePowerN) / (ratePowerN - 1));
  };

  const emi = useMemo(() => {
    return calculateEmi(tenure, totalLoanAmout, rate / 1200);
  }, [totalLoanAmout, cost, tenure, rate, dp, processFee]);

  const maxEmi = useMemo(() => {
    const c = Number(cost);
    const extraAmout = (5 * c) / 100;
    return calculateEmi(tenures.at(0), c + extraAmout, 20 / 1200);
  }, [totalLoanAmout, cost]);

  return {
    cost,
    setCost,
    rate,
    setRate,
    dp,
    setDP,
    processFee,
    setProcessFee,
    tenure,
    setTenure,
    tenures,
    totalLoanAmout,
    emi,
    maxEmi,
    maxDP,
  };
};

export { useEmiCalculator };
