import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Slices/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browse />
        }
    ]);

    //managing sign-in sign-up [adding user and removing user] action at one place 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
            }
            else {
                dispatch(removeUser());
            }
        });

    }, []);


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body; 