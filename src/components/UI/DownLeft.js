import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeActions } from "../../store/poke";

import useHttp from "../../hooks/use-http";
import { getSinglePokemon } from "../../lib/api";

const DownLeft = (props) => {
  const { sendRequest, status, data, error } = useHttp(getSinglePokemon);
  const dispatch = useDispatch();

  const pokeState = useSelector(state => state.poke)
  
  useEffect(() => {
    sendRequest(pokeState.pokeNum);
  }, [sendRequest, pokeState.pokeNum]);

  const increaseNumPokeHandler = () => {
    dispatch(pokeActions.change('add1'))
    console.log(pokeState.data.sprites)
  };

  const inc10NumPokeHandler = () => {
    dispatch(pokeActions.change('plus10'))
  };

  const decreaseNumPokeHandler = () => {
    dispatch(pokeActions.change('rem1'))
  };

  const dec10NumPokeHandler = () => {
    dispatch(pokeActions.change('min10'))
  };

  if(data !== null) {
    dispatch(pokeActions.updateState(data))
  }

  return (
    <Fragment>
      <div className="blue-button-left"></div>
      <div className="green-button-left"></div>
      <div className="orange-button-left"></div>
      <div className="square-button-left">
        <input
          id="nb"
          type="text"
          name="howmuch"
          value={pokeState.pokeNum}
          readOnly
          // onChange={setPokeNum}
        />
      </div>
      <div className="cross">
        <div className="cross-buttons midB">
          <div className="mid-circle"></div>
        </div>
        <button className="cross-buttons topB" onClick={increaseNumPokeHandler}>
          {/* onclick="increaseIdPokemon()" */}
          <div className="upC"></div>
        </button>
        <div className="cross-buttons rightB" onClick={inc10NumPokeHandler}>
          <div className="rightC"></div>
        </div>
        <button className="cross-buttons botB" onClick={decreaseNumPokeHandler}>
          {/* onclick="decreaseIdPokemon()" */}
          <div className="downC"></div>
        </button>
        <div className="cross-buttons leftB" onClick={dec10NumPokeHandler}>
          <div className="leftC"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default DownLeft;
