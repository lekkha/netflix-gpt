import { useState } from "react"
import Header from "./Header"
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
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
            <form className="w-4/12 absolute p-12 bg-black text-white my-28 mx-auto left-0 right-0 rounded-lg bg-opacity-85">
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
                    className="p-2 mt-4 w-full bg-neutral-700"
                    placeholder="Email"
                    type="text" />
                <input
                    className="p-2 mt-3 mb-4 w-full bg-neutral-700"
                    placeholder="Password"
                    type="password" />

                <button
                    className="p-2 my-6 bg-red-700 w-full"
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