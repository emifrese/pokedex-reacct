import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

const PokemonScreen = () => {
  const [toggleImage, setToggleImage] = useState(true);
  const pokeState = useSelector((state) => state.poke);
  let pokeImg;

  if (Object.keys(pokeState.data).length !== 0) {
    if(toggleImage) {
      pokeImg = pokeState.data.sprites.front_default;
    } else {
      pokeImg = pokeState.data.sprites.back_default
    }
  }

  const onToggleImage = () => {
    setToggleImage(prevState => !prevState)
    console.log(toggleImage)
  }

  return (
    <Fragment>
      <div className="border-screen">
        <div className="button-top first"></div>
        <div className="button-top second"></div>
        <button className="button-bottom" onClick={onToggleImage}></button>
        <p>&equiv;&equiv;</p>
      </div>
      <div className="screen">
        <img className="selectDisable" src={pokeImg} alt="" />
      </div>
      <div className="triangle"></div>
    </Fragment>
  );
};

export default PokemonScreen;
