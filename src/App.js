import { Link, Routes, Route } from "react-router-dom";
import AddRecipe from "./Pages/AddRecipe";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

export default function App() {
    return (
        <div className='=justify-center'>
            <nav className='py-5 text-center bg-slate-700 text-slate-300'>
                <Link to='login'>LOGIN</Link> |{" "}
                <Link to='profile'>PROFILE</Link> |{" "}
                <Link to='add-recipe'>ADD RECIPE</Link>
            </nav>

            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='profile' element={<Profile />} />
                <Route path='add-recipe' element={<AddRecipe />} />
                <Route path='default' element={<Login />} />
            </Routes>
        </div>
    );
}
