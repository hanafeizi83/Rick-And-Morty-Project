import React, { useEffect, useState } from 'react'
// import { character } from '../../data/data'
import { episodes } from '../../data/data'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import Loader from './Loader'
import toast from 'react-hot-toast'
function ChatacterDetail({ selectId }) {
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${selectId}`);
                setCharacter(data)

            } catch (error) {
                setCharacter(null)
                toast.error(error.response.data.error)

            } finally {
                setIsLoading(false)
            }
        }
        if (selectId) fetchData()
    }, [selectId]);

    if (!selectId || !character) return <div style={{ flex: '1' }}><p style={{ color: 'var(--slate-300)', textAlign: 'center' }}>please select a character</p></div>;

    if (isLoading) return <div style={{ flex: '1' }}><Loader /></div>

    return (
        <div style={{ flex: '1' }}>
            <div className="character-detail">
                <img src={character.image} alt={character.name} className='character-detail__img' />
                <div className="character-detail__info">
                    <div className="name">
                        <span>{character.gender === 'Male' ? '🧑' : '👩'}</span>
                        <span> {character.name}</span>
                    </div>
                    <div className="info">
                        <span className={`status ${character.status === 'Dead' ? 'red' : ''}`}> </span>
                        <span> {character.status}</span>
                        <span> - {character.species}</span>
                    </div>
                    <div className="location">
                        <p>Last Known Location : </p>
                        <p>{character.location.name}</p>
                    </div>
                    <div className="actions">
                        <button className='btn btn--primary'>Add to Favourite</button>
                    </div>
                </div>
            </div>
            <CharacterEpisodes />
        </div>
    )
}

export default ChatacterDetail
function CharacterEpisodes() {
    return <div className="character-episodes">
        <div className="title">
            <h2>List of Episodes :</h2>
            <button className='icon'><ArrowUpCircleIcon /></button>
        </div>
        {
            episodes.map((episode, index) => <li key={episode.id}>
                <div>{String(index + 1).padStart(2, 0)} {episode.episode} : <strong>{episode.name}</strong></div>
                <div className='badge badge--secondary'>{episode.air_date}</div>
            </li>)
        }

    </div>
}