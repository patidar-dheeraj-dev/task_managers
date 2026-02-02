import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../redux/action/add";

export default function Addtask() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("Pending");
    const [priority, setPriority] = useState("P0");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addtask({ name, description, startDate, endDate, status, priority }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full min-h-[80vh] flex justify-center items-start sm:items-center py-8 px-4"
        >
            <div className="w-full max-w-3xl p-5 rounded-2xl bg-violet-100 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Add New Task
                </h2>

                <div className="flex flex-col mb-5">
                    <label className="font-bold">Title</label>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        className="border rounded h-10 p-2 bg-gray-200"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col mb-5">
                    <label className="font-bold">Description</label>
                    <textarea
                        placeholder="Task description"
                        className="border rounded min-h-28 p-2 bg-gray-200"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-3">
                    <div className="flex flex-col w-full">
                        <label className="font-medium">Start Date</label>
                        <input
                            type="date"
                            className="border rounded h-10 p-2 bg-gray-200"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                            required
                        />

                    </div>

                    <div className="flex flex-col w-full">
                        <label className="font-medium">End Date</label>
                        <input
                            type="date"
                            className="border rounded h-10 p-2 bg-gray-200"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-5">
                    <div className="flex flex-col w-full">
                        <label className="font-medium">Status</label>
                        <select
                            className="border p-2 rounded bg-gray-200"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option>Pending</option>
                            <option>Complete</option>
                            <option>Progress</option>
                            <option>Deployed</option>
                            <option>Deferred</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="font-medium">Priority</label>
                        <select
                            className="border p-2 rounded bg-gray-200"
                            value={priority}
                            onChange={e => setPriority(e.target.value)}
                        >
                            <option>P0</option>
                            <option>P1</option>
                            <option>P2</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full rounded text-white bg-blue-800 h-11 mt-6 hover:bg-blue-700"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
}
