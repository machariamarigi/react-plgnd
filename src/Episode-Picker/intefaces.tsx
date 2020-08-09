export interface IEpisode {
    id: number
    name: string
    airdate: string
    airtime: string
    airstamp: string
    image: {
        medium: string
    }
    number: number
    runtime: number
    season: number
    summary: string
    url: string
}

export interface IState {
    episodes: Array<IEpisode>
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string
    payload: any
}
