import logo from "./assets/logo.svg";
import Billform from "./components/Billform";
import TipAmount from "./components/TipAmount";

const App = () => {
  return (
    <>
      <div className="img-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <Billform />
        <TipAmount />
      </div>
    </>
  );
};

export default App;
