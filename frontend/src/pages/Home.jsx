import React from "react";
import axiosInstance from "../config/axios";
import { useNavigate } from "react-router";

export default function Home() {

    const navigate = useNavigate();

    const logoutHandler = () => {
        axiosInstance.post("/api/user/logout")
            .then((response) => {
                console.log("Logout Successful:", response.data);
                // Handle successful logout (e.g., redirect to login page)
                navigate("/login");
            })
            .catch((error) => {
                console.error("Logout Error:", error);
            });
    };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-purple-400">ChatBot</h2>
          <div className="space-y-4">
            <div className="bg-white/20 p-4 rounded-xl shadow-md">
              <p className="text-sm text-gray-300">Logged in as</p>
              <p className="font-semibold">Puneet Ji</p>
            </div>
            <nav className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-xl hover:bg-purple-500/40 transition">
                Dashboard
              </button>
              <button className="w-full text-left px-4 py-2 rounded-xl hover:bg-purple-500/40 transition">
                Chats
              </button>
              <button className="w-full text-left px-4 py-2 rounded-xl hover:bg-purple-500/40 transition">
                Settings
              </button>
            </nav>
          </div>
        </div>

        <button onClick={logoutHandler} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition">
          Logout
        </button>
      </aside>

      {/* Chat Section */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="p-4 border-b border-white/20 bg-white/5 backdrop-blur-lg">
          <h2 className="text-xl font-bold">Welcome to ChatBot</h2>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Example messages */}
          <div className="flex justify-start">
            <div className="bg-white/20 p-3 rounded-2xl max-w-sm">
              <p>Hello 👋 How can I help you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-purple-500 p-3 rounded-2xl max-w-sm">
              <p>I want to know about my account.</p>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <footer className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-lg">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-xl font-semibold transition">
              Send
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
