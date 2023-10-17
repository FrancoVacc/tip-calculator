import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";
import { BillInput } from "./BillInput";
import SelectTip from "./SelectTip.jsx";

const Billform = () => {
  return (
    <>
      <form>
        <BillInput
          placeholder={0.0}
          label={"Bill"}
          icon={iconDollar}
          id={"bill-imput"}
        />
        <SelectTip />
        <BillInput
          placeholder={"People"}
          label={"Number of people"}
          icon={iconPerson}
          id={"person-imput"}
        />
      </form>
    </>
  );
};

export default Billform;
