import React from "react";

export default function Contacts() {
    return (
        <div id="Contacts" className="bg-gray-200 py-8 mt-3">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
