import React from 'react';
import { IEpisode, IAction } from '../intefaces';

interface IProps {
    episodes: IEpisode[]
    toggleFavouriteEpisode: (episode: IEpisode) => IAction
    isEpisodeInFavourites: (episode: IEpisode) => boolean
}

export default function EpisodeList (
    { 
        episodes,
        toggleFavouriteEpisode,
        isEpisodeInFavourites 
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
                        style={{background: isEpisodeInFavourites(episode)? 'cyan': ''}}>
                        <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                        <div>{episode.name}</div>
                        <section>
                            <div>
                                Season: {episode.season} Number: {episode.number}
                            </div>
                            <button type='button' onClick={() => toggleFavouriteEpisode(episode)}>
                                {isEpisodeInFavourites(episode) ? 'Unfavourite' : 'Favourite' }
                            </button>
                        </section>
                    </section>
                )
            })
        }
    </section>
    )
}
