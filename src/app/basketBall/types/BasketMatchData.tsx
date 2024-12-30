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
            quarter_1: string | null;
            quarter_2: string | null;
            quarter_3: string | null;
            quarter_4: string | null;
            over_time: string | null;
            total: string | null;
        },
        away: {
            quarter_1: string | null;
            quarter_2: string | null;
            quarter_3: string | null;
            quarter_4: string | null;
            over_time: string | null;
            total: string | null;

        }
    },
}