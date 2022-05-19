import { Link, Routes, Route } from "react-router-dom";
import Index from "./Pages";
import AddRecipe from "./Pages/AddRecipe";
import Login from "./Pages/Login";

export default function App() {
    return (
        <div className='=justify-center'>
            <nav className='py-5 text-center bg-slate-700 text-slate-300'>
                <Link to='login'>LOGIN</Link> |{" "}
                <Link to='add-recipe'>ADD RECIPE</Link>
            </nav>

            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='add-recipe' element={<AddRecipe />} />
                <Route path='/' element={<Index />} />
            </Routes>
        </div>
    );
}
