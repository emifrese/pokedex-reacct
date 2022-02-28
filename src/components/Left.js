import { Fragment } from "react";
import DownLeft from "./UI/DownLeft";
import PokedexLogo from "./UI/PokedexLogo";
import PokemonScreen from "./UI/PokemonScreen";
import UpperLeft from "./UI/UpperLeft";

const Left = (props) => {

  return (
    <Fragment>
      <div className="left">
        <UpperLeft />
        <PokedexLogo />
        <PokemonScreen />
        <DownLeft/>
      </div>
    </Fragment>
  );
};

export default Left;
