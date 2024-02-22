import Login from "./Login"
import Browse from "./Browse"
import Movie from "./Movie"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browse />
        },
        {
            path: "/movie/:movId",
            element: <Movie />
        }

    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body; 