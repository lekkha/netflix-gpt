import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";


const Browse = () => {

    useNowPlayingHook();

    return (
        <div>
            <Header />
        </div>
    )
}
export default Browse; 