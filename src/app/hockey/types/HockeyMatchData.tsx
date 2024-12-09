export interface HockeyMatchData {
    fixture: {
        id: number;
        date: string;
        timestamp: number;
        time: string;
        periods: {
            first?: string | null;
            second?: string | null;
            third?: string | null;
            overtime?: string | null;
            penalties?: string | null;
        };
        status: {
            long?: string | null;
            short?: string | null;
            elapsed?: string | null;
        };
    };
    league: {
        id: number;
        country: string;
        logo: string;
        flag: string;
        season: number;
        name: string;
    };
    scores: {
        home?: number;
        away?: number;
    };
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;

        };
        away: {
            id: number;
            name: string;
            logo: string;

        };
    };
}