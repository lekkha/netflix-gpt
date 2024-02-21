
import { IMG_CDN_URL } from "../utils/constants"



const MovieCards = ({ id, posterPath }) => {
    //error handling
    if (!posterPath) return null

    return (
        <div className=" w-32 pr-3">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="movie-card" />
        </div>
    )
}

export default MovieCards


