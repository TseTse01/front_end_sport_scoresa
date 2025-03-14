export interface standingPropsRugby {
    position: number,
    stage: string,
    group: {
        name: string,
    }
    team: {
        id: number,
        name: string,
        logo: string,
    }
    league: {
        id: number,
        name: string,
        type: string,
        logo: string,
        season: number,
    }
    country: {
        id: number,
        name: string,
        code: string,
        flag: string,
    }
    games: {
        played: number,
        win: {
            total: number,
            percentage: string,
        }
        draw: {
            total: number,
            percentage: string,
        }
        lose: {
            total: number,
            percentage: string,
        }
    }
    goals: {
        for: number,
        against: number,
    }
    points: number,
    form: string,
    description: number,

}