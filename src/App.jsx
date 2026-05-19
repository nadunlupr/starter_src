
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MovieList from './components/MovieList'
import WatchList from './components/WatchList'

function App() {

  return (
    <>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <MovieList />
          <WatchList />
        </div>
    </>
  )
}

export default App
