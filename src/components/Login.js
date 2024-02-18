import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null)
    const password = useRef(null)
    const handleButtonClick = () => {
        //validate the form data
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        // console.log(message);
        setErrorMessage(message);
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />

            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-12 bg-black text-white my-28 mx-auto left-0 right-0 rounded-lg bg-opacity-85">
                <h1
                    className="font-bold text-3xl py-4"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && <input
                    className="p-2 mt-4 w-full bg-neutral-700"
                    placeholder="Name"
                    type="text" />}
                <input
                    ref={email}
                    className="p-2 mt-4 w-full bg-neutral-700"
                    placeholder="Email"
                    type="text" />
                <input
                    ref={password}
                    className="p-2 mt-3 mb-4 w-full bg-neutral-700"
                    placeholder="Password"
                    type="password" />

                <p className="text-red-700 py-2">{errorMessage}</p>

                <button
                    className="p-2 my-6 bg-red-700 w-full"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p
                    className="py-4 cursor-pointer"
                    onClick={toggleSignInForm}
                >
                    {isSignInForm ? "New to Netflix? Sign Up Now!" : "Alredy a member? Sign In"}
                </p>
            </form>

        </div>
    )
}

export default Login