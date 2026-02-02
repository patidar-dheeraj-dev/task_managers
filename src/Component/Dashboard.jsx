import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex">

      <div
        className={`bg-violet-600 text-white w-64 md:w-72 fixed md:static inset-y-0 left-0 transform 
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        transition-transform duration-300 z-50`}
      >
        <h2 className="text-3xl font-medium flex justify-center mt-6 gap-2">
          <i className="fa-solid fa-list-check"></i> Task Manager
        </h2>

        <div className="mt-6 px-4 overflow-y-auto h-[80vh]">
          <aside className="flex flex-col gap-2">

            <NavLink to="/dashboard/dashcopy" className="p-3 hover:bg-violet-800 rounded">
              Dashboard
            </NavLink>

            <NavLink to="/dashboard/completed" className="p-3 hover:bg-violet-800 rounded">
              Completed Task
            </NavLink>

            <NavLink to="/dashboard/pending" className="p-3 hover:bg-violet-800 rounded">
              Pending Task
            </NavLink>

            <NavLink to="/dashboard/progress" className="p-3 hover:bg-violet-800 rounded">
              Progress Task
            </NavLink>

            <NavLink to="/dashboard/deployed" className="p-3 hover:bg-violet-800 rounded">
              Deployed Task
            </NavLink>

            <NavLink to="/dashboard/deferred" className="p-3 hover:bg-violet-800 rounded">
              Deferred Task
            </NavLink>

            <NavLink to="/dashboard/addtask" className="p-3 hover:bg-violet-800 rounded">
              Add Task
            </NavLink>

            <NavLink to="/dashboard/status" className="p-3 hover:bg-violet-800 rounded">
              Task Status
            </NavLink>

          </aside>
        </div>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full bg-violet-700 text-white p-4 flex justify-between z-40">
        <h2 className="text-xl font-semibold">Task Manager</h2>
        <button onClick={() => setOpen(!open)}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      <div className="flex-1 ml-0 md:ml-0 p-4 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
