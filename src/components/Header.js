import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user);//to access photo url subs to store
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




    return (
        <div className="z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
            <img
                className="w-44"
                src={LOGO}
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