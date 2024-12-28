import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React from 'react'
function CharacterList({ characters, selectId, onSelect }) {
    return (
        <div className="characters-list">
            {
                characters.map(character => <Character
                    character={character}
                    key={character.id}
                    selectId={selectId}
                    onSelect={onSelect}
                />)
            }

        </div>
    )
}

export default CharacterList

function Character({ character, selectId, onSelect }) {
    return < div className='list__item' key={character.id}>
        <img src={character.image} alt={character.name} />
        <h3 className='name'>
            <span>{character.gender == 'Male' ? '🧑' : '👩'}</span>
            <span>{character.name}</span>
        </h3>
        <div className='list-item__info info'>
            <span className={`status ${character.status === 'Dead' ? 'red' : ''}`}></span>
            <span> {character.status}</span>
            <span> - {character.species}</span>
        </div>
        <button className='icon red' onClick={() => { onSelect(character.id) }}>
            {selectId === character.id ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
    </div >
}
