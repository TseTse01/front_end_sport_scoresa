export interface Match {
    fixture: {
        id: number;
        date: string;
        timestamp: number;
        time: string;
        status: {
            long: string;
            short: string;
        }
    },
    country: {
        id: number;
        name: string;
        flag: string;
    },
    league: {
        id: number;
        name: string;
        logo: string;
        season: number;
    },
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;
        },
        away: {
            id: number;
            name: string;
            logo: string;
        },
    },
    scores: {
        home: number | null;
        away: number | null;
    },
    periods: {
        first: string | null;
        second: string | null;
        third: string | null;
        overtime: string | null;
        penalties: string | null;
    },
}
