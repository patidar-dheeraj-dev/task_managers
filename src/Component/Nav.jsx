import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-blue-300 fixed top-0 left-0 shadow z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-800">Task-Whiz</h2>
                <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)} > ☰</button>
                <div className={` w-full md:w-auto absolute md:static left-0 top-14 bg-blue-300 md:bg-transparent transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0 md:max-h-none"}`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 px-6 md:px-0 py-4 md:py-0 text-lg font-semibold">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-sky-700"> Home </NavLink>
                        <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-sky-700">Dashboard</NavLink>

                        <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-sky-700">About</NavLink>

                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-sky-700"> Contact</NavLink>

                        <NavLink to="/login" onClick={() => setIsOpen(false)}>
                            <button className="bg-blue-900 text-white px-5 py-1 rounded hover:bg-blue-700">Login  </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
