export interface standingProps {
    country: {
        code: string,
        flag: string,
        id: number,
        name: string,
    },
    description: string,
    form: string,
    games: {
        lose: {
            percentage: string,
            total: number,
        },
        lose_overtime: {
            percentage: string,
            total: number,

        },
        played: number,
        win: {
            percentage: string,
            total: number,

        },
        win_overtime: {
            percentage: string,
            total: number,

        },

    },
    goals: {
        against: number,
        for: number,
    };
    group: {
        name: string,
    },
    league: {
        id: number,
        logo: string,
        name: string,
        season: number,
        type: string,
    },
    points: number,
    position: number,
    stage: string,
    team: {
        id: number,
        logo: string,
        name: string,
    },

}