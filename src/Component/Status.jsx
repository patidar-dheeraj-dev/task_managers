import { useSelector } from "react-redux";

export default function Status() {
    const { task: data = [] } = useSelector((state) => state.taskReducer);

    const total = data.length;

    return (
        <>
            <div className="flex justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold mt-4"> Task Status</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <StatusCard title="Total Task" count={total} badge="T" badgeColor="bg-yellow-400" />
                <StatusCard title="Pending Task" count={data.filter((t) => t.status === "Pending").length} badge="P" badgeColor="bg-lime-400" />
                <StatusCard title="Progress Task" count={data.filter((t) => t.status === "Progress").length} badge="P" badgeColor="bg-teal-400" />
                <StatusCard title="Completed Task" count={data.filter((t) => t.status === "Complete").length} badge="C" badgeColor="bg-fuchsia-400" />
                <StatusCard title="Deployed Task" count={data.filter((t) => t.status === "Deployed").length} badge="D" badgeColor="bg-purple-400" />
                <StatusCard title="Deferred Task" count={data.filter((t) => t.status === "Deferred").length} badge="D" badgeColor="bg-cyan-400" />
            </div>
        </>
    );
}

function StatusCard({ title, count, badge, badgeColor }) {
    return (
        <div className="flex justify-between items-center p-5 rounded-xl shadow-xl bg-blue-200">
            <div>
                <h2 className="text-lg md:text-xl mb-2">{title}</h2>
                <h3 className="text-xl font-semibold">{count}</h3>
                <span className="text-sm text-gray-700">110 last month</span>
            </div>

            <div>
                <h2 className={`font-extrabold text-4xl md:text-6xl px-4 py-2 rounded-3xl text-blue-700 ${badgeColor}`}> {badge}</h2>
            </div>
        </div>
    );
}
