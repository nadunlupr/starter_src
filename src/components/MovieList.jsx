//Movies API 'https://www.omdbapi.com/?apikey=thewdb&s=batman'
export default function MovieList(props) {

    const initialState = {
        movies: []
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        // implement the logic to send a request to an API
        const loadMovies = async() => {
            
        }
        loadMovies();
    }, [])

    return (
        <div>
            {
                state.movies.map(movie => <MovieCard movie={movie}
                    addToWatchlist={(movie) => addToWatchlist(movie)}
                     />)
            }
        </div>
    )
}