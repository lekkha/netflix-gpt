import { useSelector } from "react-redux"
import MovieList from "./MovieList"



const GptMovieSuggestions = () => {

    const { movieName, movieResults } = useSelector((store) => store.gpt)
    if (!movieName) return null;

    return (
        <div className="mt-10 bg-black text-white bg-opacity-85">
            <div>
                {movieName.map((movieName, index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]} />
                ))}

            </div>

        </div>
    )
}

export default GptMovieSuggestions
