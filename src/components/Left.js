import { Fragment, useState, useEffect } from "react";
import BorderScreen from "./UI/BorderScreen";
import DownLeft from "./UI/DownLeft";
import PokedexLogo from "./UI/PokedexLogo";
import PokemonScreen from "./UI/PokemonScreen";
import UpperLeft from "./UI/UpperLeft";

const Left = (props) => {
  const [pokeImage, setPokeImage] = useState();

  useEffect(() => {
    if (props.data !== null) {
      setPokeImage(props.data.sprites.front_default);
    }
  }, [props.data]);

  const increaseNumPokeHandler = () => {
    props.onChange((prevState) => prevState + 1);
  };

  const inc10NumPokeHandler = () => {
    props.onChange((prevState) => prevState + 10);
  };

  const decreaseNumPokeHandler = () => {
    if (props.pokeNum > 1) {
      props.onChange((prevState) => prevState - 1);
    }
  };

  const dec10NumPokeHandler = () => {
    if (props.pokeNum > 10) {
      props.onChange((prevState) => prevState - 10);
    }
  };

  return (
    <Fragment>
      <div className="left">
        <UpperLeft />
        {/* <PokedexLogo /> */}
        <BorderScreen />
        <PokemonScreen pokeImage={pokeImage} />
        <DownLeft
          onInc={increaseNumPokeHandler}
          onDec={decreaseNumPokeHandler}
          on10Inc={inc10NumPokeHandler}
          on10Dec={dec10NumPokeHandler}
          pokeNum={props.pokeNum}
          onSetPokeNum={props.onSetPokeNum}
        />
      </div>
    </Fragment>
  );
};

export default Left;
