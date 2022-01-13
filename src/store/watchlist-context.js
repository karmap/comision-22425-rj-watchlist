import { createContext, useState } from "react";

export const WatchlistContext = createContext({
    list: []
})

export function WatchlistContextProvider(props) {
    
    const [watchlist, setWatchlist] = useState([])

    const addToWatchlist = (episodeId) => {
        setWatchlist( (prevWatchlist) => {
            return prevWatchlist.concat(episodeId)
        })
    }

    const removeFromWatchlist = (episodeId) => {
        setWatchlist(prevWatchlist => {
            return prevWatchlist.filter(e => e !== episodeId);
        });
    }

    const episodeIsInWatchlist = (episodeId) => {
        return watchlist.some( e => e === episodeId )
    }

    function clearList() {
        setWatchlist([])
    }

    const context = {
        list: watchlist,
        total: watchlist.length,
        addEpisode: addToWatchlist,
        removeEpisode: removeFromWatchlist,
        episodeInWatchlist: episodeIsInWatchlist,
        clearList: clearList
    }

    return (
        <WatchlistContext.Provider value={context}>
            {props.children}
        </WatchlistContext.Provider>
    )

}