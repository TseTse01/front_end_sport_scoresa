export interface idsLeague {
    id: number,
    leaguename: string,
    logo: string,
    country: {
        countryId: number,
        countryName: string,
        countryFlag: string,
    },
    season: {
        seasons: number,
        current: boolean,
        start: string,
        end: string,
    },

}