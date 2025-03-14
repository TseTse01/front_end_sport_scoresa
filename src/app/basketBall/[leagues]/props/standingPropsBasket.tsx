export interface standingProps {
    position: number,
    stage: string,
    group: {
        name: string,
        points: string | null,
    },
    team: {
        id: number,
        name: string,
        logo: string,
    },
    league: {
        id: number,
        name: string,
        type: string,
        season: number,
        logo: string,
    },
    country: {
        id: number,
        name: string,
        code: string,
        flag: string,
    },

    games: {
        played: number,
        win: {
            total: number,
            percentage: string,
        }
        lose: {
            total: number,
            percentage: string,
        }
    },
    points: {
        for: number,
        against: number,
    }
    form: null | string,
    description: null | string,
}
