import "./box.css";
const Box1 = ({box, name, paragraph, amount}) => {
    return (
      <div className="boxDiv1">
        <div>
          <img src={box} alt="flower" className="boximg"/>
        </div>
        <div className="boxDiv2">
            <h3 className="boxH3">{name}</h3>
            <p>{paragraph}</p>
            <h4>{amount}</h4>
        </div>
      </div>
    );
}
 
export default Box1;