import { Fragment } from "react";
import { useSelector } from "react-redux";

const PokemonScreen = () => {

  const pokeState = useSelector(state => state.poke)
  let pokeImg

  if(Object.keys(pokeState.data).length !== 0) {
    pokeImg = pokeState.data.sprites.front_default
  }

  return (
    <Fragment>
      <div className="screen">
        <img className="selectDisable" src={pokeImg} alt="" />
      </div>
      <div className="triangle"></div>
    </Fragment>
  );
};

export default PokemonScreen;
