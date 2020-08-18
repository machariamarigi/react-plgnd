import React, { useContext } from 'react';
import { IEpisode, Dispatch } from '../intefaces';
import { isEpisodeInFavourites } from '../helpers';

interface IProps {
    episodes: IEpisode[]
    toggleFavouriteEpisode: (
        episode: IEpisode,
        favourites: IEpisode[],
        dispatch: Dispatch
    ) => any
    favourites: IEpisode[],
    dispatch: Dispatch
}

export default function EpisodeList (
    { 
        episodes,
        toggleFavouriteEpisode,
        favourites,
        dispatch
    }: IProps
): JSX.Element {

    return (
    <section className="episode-layout">
        {
            episodes.map((episode: IEpisode): JSX.Element => {
                return (
                    <section 
                        key={episode.id} 
                        className="episode-card" 
                        style={{background: isEpisodeInFavourites(episode, favourites)? 'cyan': ''}}>
                        <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                        <div>{episode.name}</div>
                        <section>
                            <div>
                                Season: {episode.season} Number: {episode.number}
                            </div>
                            <button type='button' onClick={() => toggleFavouriteEpisode(episode, favourites, dispatch)}>
                                {isEpisodeInFavourites(episode, favourites) ? 'Unfavourite' : 'Favourite' }
                            </button>
                        </section>
                    </section>
                )
            })
        }
    </section>
    )
}
