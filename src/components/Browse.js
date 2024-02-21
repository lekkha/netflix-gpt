import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularHook from "../hooks/usePopularHook";
import useUpcomingHook from "../hooks/useUpcomingHook";
import useTopRatedHook from "../hooks/useTopRatedHook";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingHook();
    usePopularHook();
    useUpcomingHook();
    useTopRatedHook();

    return (
        <div>
            <Header />
            {showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}

        </div>
    )
}
export default Browse; 