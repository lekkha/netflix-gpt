import { useParams } from "react-router-dom"
import MovieBackground from "./MovieBackground"
import MovieTitle from "./MovieTitle"
import { useSelector } from "react-redux"
import useMovieTitle from "../hooks/useMovieTitle"

const Movie = () => {

    const { movId } = useParams()

    const original_title = useSelector((store) => store.movies.title)
    const overview = useSelector((store) => store.movies.overview)

    useMovieTitle(movId)

    return (
        <div>
            <MovieTitle title={original_title} overview={overview} />
            <MovieBackground movId={movId} />
        </div>

    )
}

export default Movie
