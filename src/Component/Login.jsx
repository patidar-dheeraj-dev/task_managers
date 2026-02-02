import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            localStorage.setItem("loggedin", "true");
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-blue-100 flex justify-center items-center px-4">
            <div className="bg-blue-200 rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
                <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
                    <img src="/login.png" alt="Login" className="max-w-xs md:max-w-sm w-full" />
                </div>
                <div className="w-full md:w-1/2 bg-white md:bg-blue-200 p-6 md:p-10">
                    <h2 className="font-bold text-3xl text-blue-800 mb-8 text-center md:text-left">Login </h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-5">
                            <label className="font-bold">Email</label>
                            <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="mt-1 border rounded w-full h-10 p-2" required />
                        </div>

                        <div className="mb-5">
                            <label className="font-bold">Password</label>
                            <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="mt-1 border rounded w-full h-10 p-2" required />
                        </div>

                        <p className="mb-4 text-sm text-center md:text-left">New User?{" "}
                            <NavLink to="/register" className="hover:text-blue-700 underline">Register Here</NavLink>
                        </p>

                        <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 font-semibold" > Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
