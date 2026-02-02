import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="min-h-screen bg-blue-100 flex justify-center items-center p-4">
        <div className="bg-blue-200 rounded-xl shadow-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

          <div className="hidden md:flex justify-center items-center bg-white">
            <img
              src="/register.png"
              alt="Register"
              className="w-4/5 object-contain"
            />
          </div>

          <div className="p-6 sm:p-10">
            <h2 className="text-3xl font-bold text-blue-800 text-center md:text-left">
              Sign Up
            </h2>

            <form className="mt-8 space-y-6">
              <div className="flex flex-col">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 border rounded-lg h-10 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 border rounded-lg h-10 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-1 border rounded-lg h-10 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white rounded-lg py-2 hover:bg-blue-700 transition"
              >
                Register
              </button>
            </form>

            <p className="mt-5 text-center md:text-left">
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue-700 underline">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
