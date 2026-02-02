export default function About() {
    return (
        <>
            <div className="bg-blue-100 min-h-screen flex justify-center items-center py-12 px-4">
                <div className="max-w-4xl w-full bg-blue-800 text-white rounded-lg p-6 md:p-10 shadow">

                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
                        About Us
                    </h2>

                    <p className="text-base md:text-lg leading-7 mb-6">
                        Welcome to TaskWhiz, your ultimate companion for mastering productivity and
                        organization. In today’s fast-paced world, juggling tasks, deadlines, and priorities
                        can feel overwhelming. That’s why we created a task management solution that doesn’t
                        just organize your to-do list but transforms the way you work and live.
                    </p>

                    <p className="text-base md:text-lg leading-7 mb-6">
                        At TaskWhiz, our mission is simple: to empower individuals and teams to achieve more,
                        stress less, and stay focused on what truly matters. Whether it’s personal goals,
                        professional projects, or everyday tasks, our app is designed to provide a seamless,
                        intuitive experience that fits effortlessly into your lifestyle.
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        What We Offer:
                    </h3>

                    <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
                        <li>Plan and organize with ease by creating tasks and setting deadlines.</li>
                        <li>Track progress effortlessly with clear indicators.</li>
                        <li>Collaborate seamlessly with team task assignment and updates.</li>
                        <li>Stay focused using reminders, notifications, and priorities.</li>
                        <li>Declutter your workspace by editing, archiving, and deleting tasks.</li>
                    </ul>

                    <p className="text-base md:text-lg leading-7 mt-6">
                        We believe productivity shouldn’t be complicated. Our app simplifies task management,
                        helping you reclaim your time and energy for the things that matter most. With a clean
                        interface and customizable options, TaskWhiz supports your journey toward success—one
                        task at a time.
                    </p>

                    <p className="text-base md:text-lg leading-7 mt-6">
                        Join the thousands of users who trust TaskWhiz to organize their day and achieve
                        their goals. Let’s simplify your life and transform the way you manage tasks!
                    </p>

                </div>
            </div>
        </>
    );
}
