export interface MmaMatchData {
    fixture: {
        id: number,
        date: string,
        time: string,
        is_main: boolean,
        category: string,
        slug: string,
        timestamp: number,
    },
    status: {
        long: string,
        short: string,
    },
    fighters: {
        first: {
            id: number,
            name: string,
            logo: string,
            winner: boolean,
        },
        second: {
            id: number,
            name: string,
            logo: string,
            winner: boolean,
        },
    }
}