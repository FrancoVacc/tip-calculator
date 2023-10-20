import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import Billform from "./components/Billform";
import TipAmount from "./components/TipAmount";

const App = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [values, setValues] = useState({
    bill: "",
    tip: "",
    people: "",
  });
  const [reset, setReset] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { bill, tip, people } = values;

    if (bill <= 0) {
      return console.log("Error");
    }

    if (people <= 0) {
      return setError(true);
    }

    const total = bill / people;
    const totalTip = total * (tip / 100);
    const totalShow = total + totalTip;

    setTipAmount(totalTip);
    setTotalAmount(totalShow);
    setReset(true);
  }, [values]);

  useEffect(() => {
    if (reset == false) {
      setValues({
        bill: "",
        tip: "",
        people: "",
      });
      setTipAmount(0);
      setTotalAmount(0);
      setError(false);
    }
  }, [reset]);

  return (
    <>
      <div className="img-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <Billform
          values={values}
          setValues={setValues}
          error={error}
          setError={setError}
        />
        <TipAmount
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          reset={reset}
          setReset={setReset}
        />
      </div>
    </>
  );
};

export default App;
