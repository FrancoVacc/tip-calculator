const TipShow = ({ caption, amount }) => {
  return (
    <div>
      <div>
        <h2>{caption}</h2>
        <p>/ person</p>
      </div>
      <p className="amount">${amount}</p>
    </div>
  );
};

export default TipShow;
