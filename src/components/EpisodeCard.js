import React, {useContext} from 'react'
import {WatchlistContext} from '../store/watchlist-context';

const EpisodeCard = ({episode}) => {

    const episodeId = episode.episode

    const {list, addEpisode, episodeInWatchlist} = useContext(WatchlistContext)

    const inWatchList = episodeInWatchlist(episodeId)

    const clickHandler = () => {
        addEpisode(episodeId)
    }

    return (
        <div style={{backgroundColor:'#969696',padding:'10px',margin:'10px'}}>
            <h5>Episodio: {episodeId}</h5> 
            <h4>{episode.name}</h4>
            <h5>{episode.air_date}</h5>
            {inWatchList ? 
                <span>Ya está agregado</span>
            :
                <button onClick={clickHandler}>Agregar a la Lista</button>
            }
        </div>
    )
}

export default EpisodeCard
