import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";
import { BillInput } from "./BillInput";
import SelectTip from "./SelectTip.jsx";

const Billform = ({ values, setValues, error, setError }) => {
  //maneja el cambio en los inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (isNaN(value)) {
      return console.log("valor incorrecto");
    }
    if (name == "people" && value > 0) {
      setError(false);
    }
    const newValue = {
      ...values,
      [name]: value,
    };
    setValues(newValue);
  };

  console.log(values);

  return (
    <>
      <div className="form">
        <BillInput
          placeholder={0.0}
          label={"Bill"}
          icon={iconDollar}
          id={"bill-imput"}
          name={"bill"}
          value={values.bill}
          handleChange={handleChange}
        />
        <SelectTip
          handleChange={handleChange}
          setValues={setValues}
          values={values}
        />
        <BillInput
          placeholder={"People"}
          label={"Number of people"}
          icon={iconPerson}
          id={"person-imput"}
          name={"people"}
          value={values.people}
          handleChange={handleChange}
          error={error}
        />
      </div>
    </>
  );
};

export default Billform;
