import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: {
        ids: number[],
        idsLeague: number[],
    };
}

const initialState: CounterState = {
    value: {
        ids: [],
        idsLeague: [],
    }
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        recoverIds: (state, action) => {
            const index = state.value.ids.indexOf(action.payload);
            if (index === -1) {
                state.value.ids.push(action.payload);
            } else {
                state.value.ids.splice(index, 1);
            }
        },
        replaceId: (state, action) => {
            if (state.value.idsLeague.length > 0) {
                state.value.idsLeague = [action.payload]; // Remplace l'ID existant
                // console.log(action.payload, "// Remplace l'ID existant", state.value.idsLeague.length);

            } else {
                state.value.idsLeague.push(action.payload); // Ajoute l'ID s'il n'y a rien
                // console.log(action.payload, "Ajoute l'ID s'il n'y a rien", state.value.idsLeague.length);


            }
        },
        decrement: (state, action) => {
            state.value.ids.push(action.payload);
        }
    }
})

export const { recoverIds, replaceId, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// Tu peux utiliser replaceId comme ça :
// dispatch(replaceId(123));
// Ça va soit ajouter 123, soit remplacer l'ID existant ! 🚀
