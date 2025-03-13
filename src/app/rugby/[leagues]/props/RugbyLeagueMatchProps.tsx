export interface rugbyleagueMatchProps {
    id: number,
    date: string,
    time: string,
    timestamp: number,
    timezone: string,
    week: string,
    status: {
        long: string,
        short: string,
    },
    country: {
        id: number,
        name: string,
        code: string,
        flag: string,
    },
    league: {
        id: number,
        name: string,
        type: string,
        logo: string,
        season: number,
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
    periods: {
        first: {
            home: number | null,
            away: number | null,
        },
        second: {
            home: number | null,
            away: number | null,
        },
        overtime: {
            home: number | null,
            away: number | null,
        },
        second_overtime: {
            home: number | null,
            away: number | null,
        },
    },
}