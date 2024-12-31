export interface RugbyMatchData {
    fixture: {
        id: number,
        date: string,
        timestamp: number,
        time: string,
        periods: {
            first: {
                home: number | null,
                away: number | null,
            },
            second: {
                home: number | null,
                away: number | null,
            }
        },
        status: {
            long: string | null,
            short: string | null,
        },
    },
    league: {
        id: number,
        name: string,
        logo: string,
    },
    country: {
        id: number,
        name: string,
        flag: string,
    },
    teams: {
        home: {
            id: number,
            name: string,
            logo: string,
        },
        away: {
            id: number,
            name: string,
            logo: string,
        },
    },
    scores: {
        home: number | null,
        away: number | null,
    },
}