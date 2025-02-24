export interface propsMatchData {
    result: boolean;
    matches: Match[];
}

interface Match {
    fixture: {
        id: number;
        date: string;
        timestamp: number;
        status: {
            long: string;
            short: string;
        };
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        standings: boolean;
    };
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;
            winner: boolean;
        };
        away: {
            id: number;
            name: string;
            logo: string;
            winner: boolean;
        };
    };
    goals: {
        home: number;
        away: number;
    };
}