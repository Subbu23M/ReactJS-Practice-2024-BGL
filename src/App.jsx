import { Link, Route, Routes } from "react-router-dom"
import { FormView } from "./Components/FormView"
import { UsersList } from "./Components/UsersList"
import { LoginPage } from "./pages/LoginPage"
import { WelcomePage } from "./pages/WelcomePage"
import { Counter } from "./Components/Counter"

export const App = () => {
    return (
        <>
            <h1
                className="text-center my-2"
            >
                ReactJS-Interview-Practice
            </h1>
            <>
                <Link
                    to='/'
                >
                    Login Page 
                </Link> <br />
                <Link
                    to='/welcome'
                >
                    Welcome Page
                </Link>
            </>
            <>
                <Routes>
                    <Route
                        path='/'
                        element={<LoginPage/>}
                    />
                    <Route
                        path='/welcome'
                        element={<WelcomePage/>}
                    />
                </Routes>
            </>
            <UsersList/>
            <FormView/>
            <Counter/>
        </>
    )
}