import './App.css'
import CharacterList from './components/CharacterList'
import Navbar from './components/Navbar'
import ChatacterDetail from './components/ChatacterDetail'
import { useState } from 'react'
import { allCharacters } from '../data/data'

function App() {
  const [characters, setCharacters] = useState(allCharacters)

  return (
    <>
      <Navbar />
      <div className="main">
        <CharacterList characters={characters} />
        <ChatacterDetail />
      </div>
    </>
  )
}

export default App
