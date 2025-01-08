export interface BasketMatchData {
    fixture: {
        id: number;
        date: string;
        timestamp: number;
        time: string;
        status: {
            long: string | null;
            short: string | null;
            elepsed: string | null;
        },
    },
    league: {
        id: number,
        country: string;
        logo: string;
        flag: string;
        season: number;
        name: string;
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
        home: {
            quarter_1: number | null;
            quarter_2: number | null;
            quarter_3: number | null;
            quarter_4: number | null;
            over_time: number | null;
            total: number | null;
        },
        away: {
            quarter_1: number | null;
            quarter_2: number | null;
            quarter_3: number | null;
            quarter_4: number | null;
            over_time: number | null;
            total: number | null;

        }
    },
}