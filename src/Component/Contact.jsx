export default function Contact() {
    return (
        <>
            <div className="bg-blue-100 min-h-screen flex justify-center items-center p-4">
                <div className="w-full max-w-3xl p-6 md:p-10 bg-white rounded-xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3">
                        Contact Me
                    </h2>

                    <p className="text-center text-gray-700 mb-8 px-2">
                        We’d love to hear from you! Whether you have questions, feedback, or need assistance,
                        feel free to reach out. Our team will get back to you as soon as possible.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label className="font-semibold">Name</label>
                            <input type="text" placeholder="Enter your name" className="mt-1 w-full border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="font-semibold">Email</label>
                            <input type="email" placeholder="name@example.com" className="mt-1 w-full border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="font-semibold">Phone</label>
                            <input type="text" placeholder="Enter your phone number" className="mt-1 w-full border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="font-semibold">Subject</label>
                            <input type="text" placeholder="How can we help you?" className="mt-1 w-full border rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="font-semibold">Your Message</label>
                            <textarea rows={4} placeholder="Leave a message..." className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-lg py-2 px-8 bg-blue-800 text-white hover:bg-blue-600 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
