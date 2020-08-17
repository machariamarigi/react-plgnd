import { IEpisode } from "./intefaces";

export const isEpisodeInFavourites = (episode: IEpisode, favourites: IEpisode[]): boolean => favourites.includes(episode)
