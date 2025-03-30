import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFavoritesFromStorage, saveFavoritesToStorage } from '../../utils/localStorage';

import { MatchData } from '@/app/football/types/MatchData';
import { BasketMatchData } from '@/app/basketBall/types/BasketMatchData'
import { HockeyMatchData } from '@/app/hockey/types/HockeyMatchData'
import { RugbyMatchData } from '@/app/rugby/types/RugbyMatchData';
import { MmaMatchData } from '@/app/mma/types/MmaMatchData'
interface FavoritesState {
    footballMatches: MatchData[];
    basketballMatches: BasketMatchData[];
    hockeyMatches: HockeyMatchData[];
    rugbyMatches: RugbyMatchData[];
    mmaMatches: MmaMatchData[];
}

const initialState: FavoritesState = {
    footballMatches: loadFavoritesFromStorage(),
    basketballMatches: loadFavoritesFromStorage(),
    hockeyMatches: loadFavoritesFromStorage(),
    rugbyMatches: loadFavoritesFromStorage(),
    mmaMatches: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        footballToggleFavorite: (state, action: PayloadAction<MatchData>) => {
            const existingMatchIndex = state.footballMatches.findIndex(
                (match) => match.fixture.id === action.payload.fixture.id
            );

            if (existingMatchIndex !== -1) {
                // Si le match existe déjà, on le supprime
                state.footballMatches.splice(existingMatchIndex, 1);
            } else {
                // Sinon, on l'ajoute
                state.footballMatches.push(action.payload);
                saveFavoritesToStorage(state.footballMatches);
            }

        },
        basketballToggleFavorite: (state, action: PayloadAction<BasketMatchData>) => {
            const existingMatchIndex = state.basketballMatches.findIndex(
                (match) => match.fixture.id === action.payload.fixture.id
            );

            if (existingMatchIndex !== -1) {
                // Si le match existe déjà, on le supprime
                state.basketballMatches.splice(existingMatchIndex, 1);
            } else {
                // Sinon, on l'ajoute
                state.basketballMatches.push(action.payload);
                saveFavoritesToStorage(state.basketballMatches);
            }

        },
        hockeyToggleFavorite: (state, action: PayloadAction<HockeyMatchData>) => {
            const existingMatchIndex = state.hockeyMatches.findIndex(
                (match) => match.fixture.id === action.payload.fixture.id
            );

            if (existingMatchIndex !== -1) {
                // Si le match existe déjà, on le supprime
                state.hockeyMatches.splice(existingMatchIndex, 1);
            } else {
                // Sinon, on l'ajoute
                state.hockeyMatches.push(action.payload);
                saveFavoritesToStorage(state.hockeyMatches);
            }

        },
        rugbyToggleFavorite: (state, action: PayloadAction<RugbyMatchData>) => {
            const existingMatchIndex = state.rugbyMatches.findIndex(
                (match) => match.fixture.id === action.payload.fixture.id
            );

            if (existingMatchIndex !== -1) {
                // Si le match existe déjà, on le supprime
                state.rugbyMatches.splice(existingMatchIndex, 1);
            } else {
                // Sinon, on l'ajoute
                state.rugbyMatches.push(action.payload);
                saveFavoritesToStorage(state.rugbyMatches);
            }

        },
        mmaToggleFavorite: (state, action: PayloadAction<MmaMatchData>) => {
            const existingMatchIndex = state.mmaMatches.findIndex(
                (match) => match.fixture.id === action.payload.fixture.id
            );

            if (existingMatchIndex !== -1) {
                // Si le match existe déjà, on le supprime
                state.mmaMatches.splice(existingMatchIndex, 1);
            } else {
                // Sinon, on l'ajoute
                state.mmaMatches.push(action.payload);
                saveFavoritesToStorage(state.mmaMatches);
            }

        },
    }
});

export const { footballToggleFavorite, basketballToggleFavorite, hockeyToggleFavorite, rugbyToggleFavorite, mmaToggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;