import { createSlice } from '@reduxjs/toolkit';

const initialPokeState = {
    data: {},
    pokeNum: 1,
}

const pokeSlice = createSlice({
    name: 'poke',
    initialState: initialPokeState,
    reducers: {
        updateState(state, action) {
            state.data = action.payload
        },
        inputChange(state, action) {
            if(action.payload > 0 && action.payload < 899) {
                state.pokeNum = action.payload
            }
        },
        change(state, action) {
            switch (action.payload) {
                case 'add1':
                    if(state.pokeNum < 898)
                    state.pokeNum++
                    break;
                case 'rem1':
                    if(state.pokeNum > 1) {
                        state.pokeNum--
                    }
                    break;
                case 'plus10':
                    if(state.pokeNum < 879)
                    state.pokeNum += 10
                    break;
                case 'min10':
                    if(state.pokeNum > 10) {
                        state.pokeNum -= 10
                    }
                    break;
                default:
            }
        }
    }
})

export const pokeActions = pokeSlice.actions;

export default pokeSlice.reducer;