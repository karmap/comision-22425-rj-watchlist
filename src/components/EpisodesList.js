import React, {useState, useEffect} from 'react'
import EpisodeCard from './EpisodeCard'

const EpisodesList = () => {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        getEpisodes()
    }, [])

    const getEpisodes = () => {
        const URL = 'https://rickandmortyapi.com/api/episode' 
        fetch(URL)
            .then( res => res.json() )
            .then( data => {
                setEpisodes(data.results)
                // console.log('data',data);
            })
    }

    // console.log('eps', episodes);

    return (
        <div>
            Lista de episodios
            {episodes.map(e =>
                <EpisodeCard key={e.episode} episode={e}></EpisodeCard>
            )}
        </div>
    )
}

export default EpisodesList
