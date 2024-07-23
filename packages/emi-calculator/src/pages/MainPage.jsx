import { Input, Slider } from "../components";
import { useEmiCalculator } from "../hooks";

const MainPage = () => {
  const {
    cost,
    setCost,
    rate,
    setRate,
    processFee,
    setProcessFee,
    maxDP,
    dp,
    setDP,
    totalLoanAmout,
    emi,
    maxEmi,
    tenure,
    setTenure,
  } = useEmiCalculator();
  return (
    <div className="flex flex-col w-full justify-center gap-4 px-12">
      <h1 className="font-sans text-lg text-base">EMI Calculator</h1>
      <Input
        label="Cost"
        value={cost === 0 ? "" : cost.toString()}
        setValue={(e) => {
          const number = e.target.value;
          if (!isNaN(Number(number))) setCost(number);
          if (!e.target.value) setCost(0);
        }}
      />
      <Slider
        label="Rate of Interest"
        minRange={0}
        maxRange={20}
        value={rate}
        step={0.01}
        setValue={(value) => setRate(Number(value))}
      />
      <Slider
        label="Processing Fee"
        minRange={0}
        maxRange={5}
        value={processFee}
        step={0.05}
        setValue={(value) => setProcessFee(Number(value))}
      />
      <Slider
        label="Down Payment"
        minRange={0}
        maxRange={maxDP}
        value={dp}
        setValue={(value) => setDP(Number(value))}
      />
      <Input label="Total loan Amount" value={totalLoanAmout} disabled={true} />
      <Slider
        label="EMI"
        minRange={0}
        maxRange={maxEmi}
        value={emi}
        disabled={true}
      />
      <Slider
        label="Tenure"
        minRange={12}
        maxRange={72}
        step={12}
        value={tenure}
        setValue={(value) => setTenure(Number(value))}
      />
    </div>
  );
};

export default MainPage;
