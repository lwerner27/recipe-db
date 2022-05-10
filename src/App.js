import { Link, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

export default function App() {
    return (
        <div>
            <nav className='py-3 text-center'>
                <Link to='/login'>LOGIN</Link> |{" "}
                <Link to='/profile'>PROFILE</Link>
            </nav>

            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='profile' element={<Profile />} />
            </Routes>
        </div>
    );
}
