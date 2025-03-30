"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import favoritesReducer from "./Features/counter/favoritesSlice";
import counterReducer from "./Features/counter/counterSlice"; // ✅ Import du reducer

// Configuration de Redux Persist
const persistConfig = {
    key: "root",
    storage,
};

// Combine les reducers et applique Redux Persist seulement sur "favorites"
const rootReducer = combineReducers({
    favorites: persistReducer(persistConfig, favoritesReducer), // ✅ Persist uniquement "favorites"
    counter: counterReducer, // ✅ Ajout du reducer "counter" sans persist
});

// Création du store Redux avec les reducers combinés
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Désactive le check de serialisation pour Redux Persist
        }),
});

// Création du persistor pour Redux Persist
export const persistor = persistStore(store);

// Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;