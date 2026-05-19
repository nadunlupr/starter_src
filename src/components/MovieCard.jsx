export default function MovieCard({movie, addToWatchlist}){
    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'baseline', margin: '2%'}}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
        </div>
    )
}