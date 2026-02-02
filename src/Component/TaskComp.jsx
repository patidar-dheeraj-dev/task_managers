import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updatetask } from "../redux/action/add";

export default function TaskComp({ name }) {

    let { task: data } = useSelector(state => state.taskReducer);
    let dispatch = useDispatch();

    let change = (i, data) => {
        dispatch(updatetask(i, data));
    };

    return (
        <>
            <div className="w-full flex justify-center items-center py-3 px-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
                    {name} Task
                </h2>
            </div>

            {data && data.length ? (
                <div className="w-full h-[85vh] overflow-auto px-3 pb-6">

                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {(name === "Dashboard" ? data : data.filter(a => a.status === name))
                            .map((v, i) => (
                                <div
                                    key={i}
                                    className="w-full rounded-2xl shadow-xl border bg-white flex flex-col p-4"
                                >
                                    <div className="w-full py-3 rounded-xl bg-teal-500 text-white flex justify-center items-center">
                                        <span className="text-xl font-bold break-words text-center">
                                            {v.name}
                                        </span>
                                    </div>

                                    <div className="mt-3 text-sm text-gray-700 leading-5 line-clamp-4">
                                        {v.description}
                                    </div>

                                    <div className="flex justify-between mt-4 gap-2 text-sm">
                                        <div>
                                            <span className="font-semibold block">Start</span>
                                            <span>{v.startDate}</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold block">End</span>
                                            <span>{v.endDate}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center gap-3">

                                        {name === "Dashboard" ? (
                                            <select
                                                onChange={e =>
                                                    change(i, { ...v, status: e.target.value })
                                                }
                                                disabled={["Complete", "Deployed", "Deferred"].includes(v.status)}
                                                className="px-3 py-2 rounded-xl bg-teal-100 text-emerald-800 font-semibold w-1/2 text-sm sm:text-base"
                                            >
                                                <option>{v.status}</option>
                                                <option>Pending</option>
                                                <option>Progress</option>
                                                <option>Complete</option>
                                            </select>
                                        ) : (
                                            <span className="px-3 py-2 rounded-xl bg-teal-100 text-emerald-800 font-semibold text-sm sm:text-base">
                                                {v.status}
                                            </span>
                                        )}

                                        <span className="px-3 py-2 rounded-xl bg-teal-100 text-emerald-800 font-semibold text-sm sm:text-base">
                                            {v.priority}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <h3 className="w-full h-[70vh] flex justify-center items-center text-center px-3">
                    No task found:
                    <NavLink
                        className="text-blue-800 font-semibold hover:underline"
                        to="/dashboard/addtask"
                    >
                        Add new task
                    </NavLink>
                </h3>
            )}
        </>
    );
}
