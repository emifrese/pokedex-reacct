import {configureStore} from '@reduxjs/toolkit';

import pokeReducer from './poke';

const store = configureStore({
    reducer: { poke: pokeReducer }
})

export default store;