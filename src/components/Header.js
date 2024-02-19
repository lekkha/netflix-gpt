import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user);//to access photo url subs to store
    console.log(user)

    //no need to dispatch remove user action since on-auth-change api in body.js will automatically
    //remove object on auth change 

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")

        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className="z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo" />

            {/* show only when there is a user */}
            {user && <div className="flex p-2 gap-1">
                <img
                    className="w-10 h-10"
                    src={user?.photoURL}
                    alt="user-pic" />
                <button
                    className="w-20 h-8 bg-blue-500 cursor-pointer text-white text-center ml-2"
                    onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}
export default Header; 