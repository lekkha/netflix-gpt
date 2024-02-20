import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/Slices/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedHook = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results)
        dispatch(addTopRatedMovies(json.results))

    }

    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedHook;