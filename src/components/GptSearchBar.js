import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import genAI from "../utils/googleai"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovieResult } from "../utils/Slices/gptSlice"


const GptSearchBar = () => {

    const langkey = useSelector((store) => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch();
    //GEMINI API CALL 
    const gemini = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Act as a movies recommendation system and suggest some movies for the query" + searchText.current.value + ". Only Give me 5 movies name , comma separated like the example given ahead. Example: Gadar,Animal,Pathan,Tiger,Jawan"

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        //store response(text) in an array - splitting method ','
        const moviesArray = text.split(",").map((movie) => movie.trim());
        console.log(moviesArray);
        return moviesArray;
    }

    //search movie in TMDB [after getting array]
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value)

        //MAKE API CALL to get the movie results
        const moviesArray = await gemini();
        const gptMovies = moviesArray;

        //for each movie search TMDB API 
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)) //returns [promise, prom, prom, prom, prom]
        const tmdbResults = await Promise.all(promiseArray) //resolves all promises returns results 
        console.log(tmdbResults)
        dispatch(addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResults }))
    }

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    className="p-2 m-2 col-span-9 "
                    placeholder={lang[langkey].gptSearchPlaceHolder} />
                <button
                    className=" bg-red-700 text-white col-span-3 my-2 mx-2 rounded-lg"
                    onClick={handleGptSearchClick}>{lang[langkey].search}</button>
                <h6 className="flex col-span-12 ml-8 text-sm text-gray-400" >The movie sugestions might take some time to load </h6>
            </form>
        </div>
    )
}

export default GptSearchBar
