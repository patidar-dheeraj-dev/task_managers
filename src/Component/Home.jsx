export default function Home() {
    return (
        <>
            <div className="bg-blue-100 pt-20">
                <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center px-6 lg:px-16 py-12 gap-8">
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="font-semibold text-3xl md:text-5xl text-blue-900 mb-3">Task Manager </h2>

                        <h3 className="text-blue-900 mb-3 text-2xl md:text-3xl">Simplify Your Workday with Smart Task Management.</h3>

                        <p className="mb-4 text-base md:text-lg">Plan, organize, and execute tasks effortlessly with our intuitive tools—set priorities,track progress, and meet deadlines seamlessly.</p>

                        <button className="border px-6 py-2 rounded text-white bg-blue-800 hover:bg-blue-600">Get Started</button>
                    </div>

                    <div>
                        <img src="/Team.png" alt="image" className="w-full max-w-md" />
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 text-center">
                    {[
                        ["+ 5,200", "Happy Users"],
                        ["+ 4,500", "Paid Users"],
                        ["+ 10,000", "Viewers"],
                        ["+ 15,000", "Total Task"],
                    ].map(([num, label]) => (
                        <div key={label}>
                            <h2 className="text-blue-800 font-bold text-3xl md:text-5xl">{num}</h2>
                            <span className="font-bold text-sm">{label}</span>
                        </div>
                    ))}
                </div>

                {[
                    {
                        title: "Create and Manage Tasks Effortlessly",
                        text: "Add tasks, assign deadlines, set priorities, and track progress in real time.",
                        img: "/task.png",
                        reverse: false,
                    },
                    {
                        title: "Read and Stay on Top of Every Task",
                        text: "Quickly review task details, deadlines, and priorities in one organized view.",
                        img: "/book.png",
                        reverse: true,
                    },
                    {
                        title: "Check Tasks with Ease",
                        text: "Track progress by marking completed tasks and reviewing pending ones.",
                        img: "/pad.png",
                        reverse: false,
                    },
                    {
                        title: "Delete Tasks with Confidence",
                        text: "Easily remove tasks you no longer need, keeping your workspace clutter-free.",
                        img: "/delete.png",
                        reverse: true,
                    },
                    {
                        title: "Pin Tasks for Quick Access",
                        text: "Keep your most important tasks front and center by pinning them to the top.",
                        img: "/pin.png",
                        reverse: false,
                    },
                ].map((sec, i) => (
                    <div
                        key={i}
                        className={`w-full flex flex-col ${sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                            } justify-center items-center gap-8 px-6 lg:px-16 py-10`}
                    >
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="font-semibold text-3xl md:text-5xl text-blue-800 mb-4">
                                {sec.title}
                            </h2>
                            <p className="text-lg">{sec.text}</p>
                        </div>

                        <img src={sec.img} className="w-full max-w-md" />
                    </div>
                ))}

                <div className="w-full flex flex-col justify-center items-center px-6 py-12 gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Customer Reviews</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                        {[
                            ["Jeny", "This task manager app is a game-changer!"],
                            ["Samantha K", "This app has made managing my daily tasks easier!"],
                            ["Priya Sharma", "A fantastic tool for staying organized!"],
                            ["Emily Green", "This task manager simplifies everything!"],
                        ].map(([name, text]) => (
                            <div key={name} className="p-4 bg-blue-900 text-white rounded">
                                <p>{text}</p>
                                <h3 className="font-bold mt-2">by {name}</h3>
                                <span>4.5 ⭐⭐⭐⭐</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-10 px-6 py-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold">Join Our Newsletter</h2>
                    <h3 className="text-lg md:text-2xl mt-3">
                        Signup for our email newspaper to get updates and more
                    </h3>

                    <input
                        type="text"
                        className="border mt-4 w-full max-w-xl h-10 px-2 bg-white"
                        placeholder="Enter your email"
                    />

                    <button className="mt-6 rounded bg-blue-900 text-white px-6 py-2 hover:bg-blue-700">
                        Subscribe
                    </button>
                </div>
            </div>

            <footer className="w-full bg-slate-900 text-white px-6 py-6 flex flex-col md:flex-row gap-6 justify-between">
                <div className="flex gap-10 flex-wrap">
                    <div>
                        <h3>Taskwhiz Business</h3>
                        <h3>Teach On Taskwhiz</h3>
                        <h3>Get the App</h3>
                        <h3>About Us</h3>
                        <h3>Contact Us</h3>
                    </div>

                    <div>
                        <h3>Careers</h3>
                        <h3>Blog</h3>
                        <h3>Help and Support</h3>
                        <h3>Affiliate</h3>
                        <h3>Investors</h3>
                    </div>
                </div>

                <div className="text-center md:text-right">
                    <h2 className="text-2xl font-bold">Task Whiz</h2>
                    <span>© 2024 TaskWhiz. All rights reserved</span>
                </div>
            </footer>
        </>
    );
}
