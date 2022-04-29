import { Fragment, useEffect, useState } from "react";
import "./App.css";

import Pokedex from "./components/UI/Pokedex";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import useHttp from "./hooks/use-http";
import { getSinglePokemon } from "./lib/api";

function App() {
  return (
    <Pokedex>
      <Left/>
      <Middle />
      <Right/>
    </Pokedex>
  );
}

export default App;
