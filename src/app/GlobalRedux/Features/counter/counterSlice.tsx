import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: {
        ids: number[]
    };
}

const initialState: CounterState = {
    value: {
        ids: [],
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
                // console.log("ID ajouté:", action.payload);
            } else {
                state.value.ids.splice(index, 1);
                // console.log("ID supprimé:", action.payload);
            }
        },
        decrement: (state, action) => {
            state.value.ids.push(action.payload);
        }
    }
})

export const { recoverIds, decrement } = counterSlice.actions;
export default counterSlice.reducer;
