import { useDispatch } from "react-redux";
import { addTitle, addOverview } from "../utils/Slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTitle = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTitle = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json);

        const title = json.original_title
        const overview = json.overview
        console.log(title);
        dispatch(addTitle(title));
        dispatch(addOverview(overview));
    }

    useEffect(() => {
        getMovieTitle();
    }, [])

}

export default useMovieTitle;


