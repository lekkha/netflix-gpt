import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearchView } from "../utils/Slices/gptSlice";
import { changeLanguage } from "../utils/Slices/configSlice";

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user);//to access photo url subs to store
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    // console.log(user)

    //no need to dispatch remove user action since on-auth-change api in body.js will automatically
    //remove object on auth change 
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate("/error")
            });
    }


    //managing sign-in sign-up [adding user and removing user] action at one place 
    //ALL ROUTING WILL BE DONE FROM HERE ONLY 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
                navigate("/browser")
            }
            else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        //unsubscribe when component unmounts 
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleSearchView());
    }

    const handleLanguageChange = (e) => {
        //console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }


    return (
        <div className="z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
            <img
                className="w-44"
                src={LOGO}
                alt="logo" />

            {/* show only when there is a user */}
            {user && <div className="flex p-2 gap-1">

                {showGptSearch && (
                    <select
                        className="w-24 h-8 bg-gray-700 text-white rounded-lg"
                        onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map((lang) =>
                            (<option value={lang.identifier} key={lang.identifier}>{lang.name}</option>))}
                    </select>)
                }
                <button
                    className="w-24 h-8 bg-purple-800 text-white rounded-lg mx-2 cursor-pointer"
                    onClick={handleGptSearchClick}
                >{showGptSearch ? "Home Page" : "GPT search"}</button>

                <img
                    className="w-10 h-10"
                    src={user?.photoURL}
                    alt="user-pic" />

                <button
                    className="w-20 h-8 bg-blue-500 cursor-pointer text-white text-center ml-2 rounded-lg"
                    onClick={handleSignOut}>Sign Out</button>

            </div>}
        </div>
    )
}
export default Header; 