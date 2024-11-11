"use client";

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
            if (!state.value.ids.includes(action.payload)) {
                state.value.ids.push(action.payload);
                console.log("ID ajouté:", action.payload);
            } else {
                console.log("ID déjà présent:", action.payload);
            }
        },
        decrement: (state, action) => {
            state.value.ids.push(action.payload);
        }
    }
})

export const { recoverIds, decrement } = counterSlice.actions;
export default counterSlice.reducer;