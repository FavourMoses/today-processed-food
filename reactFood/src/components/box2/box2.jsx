import "./box2.css";
const Boxing = ({ box2, name2, amount2 }) => {
  return (
    <div className="boxingdiv1">
      <div className="boxingDiv2">
        <img src={box2} alt="flower" className="boxingImg" />
      </div>
      <h3 className="boxingH3">{name2}</h3>
      <h4 className="boxingAmt">{amount2}</h4>
    </div>
  );
};

export default Boxing;
