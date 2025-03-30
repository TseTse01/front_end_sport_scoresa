export const loadFavoritesFromStorage = () => {
    try {
        const serializedState = localStorage.getItem('favorites');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Erreur lors du chargement des favoris', err);
        return [];
    }
};

export const saveFavoritesToStorage = (favorites: any) => {
    try {
        const serializedState = JSON.stringify(favorites);
        localStorage.setItem('favorites', serializedState);
    } catch (err) {
        console.error('Erreur lors de la sauvegarde des favoris', err);
    }
};