import { Fragment } from "react";
import PokeNum from "./PokeNum";

const DownLeft = (props) => {
  return (
    <Fragment>
      <div className="blue-button-left"></div>
      <div className="green-button-left"></div>
      <div className="orange-button-left"></div>
      <PokeNum pokeNum={props.pokeNum} onSetPokeNum={props.onSetPokeNum}/>
      <div className="cross">
        <div className="cross-buttons midB">
          <div className="mid-circle"></div>
        </div>
        <button className="cross-buttons topB" onClick={props.onInc}>
          {/* onclick="increaseIdPokemon()" */}
          <div className="upC"></div>
        </button>
        <div className="cross-buttons rightB" onClick={props.on10Inc}>
          <div className="rightC"></div>
        </div>
        <button className="cross-buttons botB" onClick={props.onDec}>
          {/* onclick="decreaseIdPokemon()" */}
          <div className="downC"></div>
        </button>
        <div className="cross-buttons leftB" onClick={props.on10Dec}>
          <div className="leftC"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default DownLeft;
