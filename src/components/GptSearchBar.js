import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"


const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang)
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input
                    type="text"
                    className="p-2 m-2 col-span-9 "
                    placeholder={lang[langkey].gptSearchPlaceHolder} />
                <button className=" bg-red-700 text-white col-span-3 my-2 mx-2 rounded-lg">{lang[langkey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
