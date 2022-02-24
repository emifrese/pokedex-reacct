import { Fragment, useEffect, useState } from "react";
import "./App.css";

import Pokedex from "./components/UI/Pokedex";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import useHttp from "./hooks/use-http";
import { getSinglePokemon } from "./lib/api";

function App() {
  // const { sendRequest, status, data, error } = useHttp(getFirstPokemon, true);

  const { sendRequest, status, data, error } = useHttp(getSinglePokemon);
  const [pokeNum, setPokeNum] = useState(1);

  // console.log(pokeContext)

  useEffect(() => {
    sendRequest(pokeNum);
  }, [sendRequest, pokeNum]);

  if (status === "pending") {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Pokedex>
      <Left
        onChange={setPokeNum}
        pokeNum={pokeNum}
        data={data}
        onSetPokeNum={setPokeNum}
      />
      <Middle />
      <Right data={data} />
    </Pokedex>
  );
}

export default App;
