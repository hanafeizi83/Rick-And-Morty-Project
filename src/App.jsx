import './App.css'
import CharacterList from './components/CharacterList'
import Navbar from './components/Navbar'
import ChatacterDetail from './components/ChatacterDetail'
import { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
        setCharacters(data.results.slice(0, 5))
      } catch (error) {
        setCharacters([])
        toast.error(error.response.data.error);
      }
    }
    fetchData()
  }, [query])

  return (
    <>
      <Toaster />
      <Navbar
        query={query}
        onQuery={setQuery}
        numOfCharacter={characters.length}
      />
      <div className="main">
        <CharacterList characters={characters} />
        <ChatacterDetail />
      </div>
    </>
  )
}

export default App
