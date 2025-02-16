export interface MatchData {
    fixture: {
        date: string;
        id: number;
        timestamp: number;
        periods: {
            first?: number;
            second?: number;
        };
        status: {
            elapsed?: string;
            short?: string;
            long?: string;
        };
    };
    goals: {
        away?: number;
        home?: number;
    };
    teams: {
        away: {
            logo: string;
            name: string;
            winner: boolean;
        };
        home: {
            logo: string;
            name: string;
            winner: boolean;
        };
    };
    league: {
        flag: string;
        country: string;
        name: string;
    };
}