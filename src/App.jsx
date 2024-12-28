import './App.css'
import CharacterList from './components/CharacterList'
import Navbar from './components/Navbar'
import ChatacterDetail from './components/ChatacterDetail'
import { useEffect, useState } from 'react'
import { allCharacters } from '../data/data'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(data.results.slice(0,5))
      } catch (error) {
        toast.error(error.response.data.error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="main">
        <CharacterList characters={characters} />
        <ChatacterDetail />
      </div>
    </>
  )
}

export default App
