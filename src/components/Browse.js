import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

    useNowPlayingHook();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}
export default Browse; 