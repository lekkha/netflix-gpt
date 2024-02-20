import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularHook from "../hooks/usePopularHook";
import useUpcomingHook from "../hooks/useUpcomingHook";
import useTopRatedHook from "../hooks/useTopRatedHook";


const Browse = () => {

    useNowPlayingHook();
    usePopularHook();
    useUpcomingHook();
    useTopRatedHook();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}
export default Browse; 