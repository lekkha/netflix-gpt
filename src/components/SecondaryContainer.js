import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    console.log(movies)
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-28 pl-6 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />

                </div>

            </div>
        )
    )
}

export default SecondaryContainer; 