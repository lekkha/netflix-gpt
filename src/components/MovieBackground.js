import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo"

//fetching trialer vidoe from api and updating the store with trailer video data
const MovieBackground = ({ movId }) => {
    const movieVideo = useSelector((store) => store.movies?.movieVideo)

    useMovieVideo(movId)


    return (
        <div className="w-screen">

            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + movieVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>

        </div>
    )
}

export default MovieBackground