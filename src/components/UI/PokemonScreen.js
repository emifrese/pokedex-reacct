import { Fragment } from "react";

const PokemonScreen = (props) => {
  return (
    <Fragment>
      <div className="screen">
        <img className="selectDisable" src={props.pokeImage} alt="" />
      </div>
      <div className="triangle"></div>
    </Fragment>
  );
};

export default PokemonScreen;
