import React, {useContext} from 'react'
import {WatchlistContext} from '../store/watchlist-context';


const Watchlist = () => {

    const {list, total, removeEpisode} = useContext(WatchlistContext)

    return (
        <div>
            Watchlist ({total})
            {list.map( e => 
                <h5 key={e}> {e} - <button onClick={()=>{removeEpisode(e)}}>eliminar</button> </h5>
            )}
        </div>
    )
}

export default Watchlist
