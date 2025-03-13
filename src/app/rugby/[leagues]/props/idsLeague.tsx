export interface idsLeague {
    id: number,
    name: string,
    type: string,
    logo: string,
    country: {
        id: number,
        name: string,
        flag: string,
    },
    seasons: {
        season: number,
        current: boolean,
        start: string,
        end: string,
    },
}