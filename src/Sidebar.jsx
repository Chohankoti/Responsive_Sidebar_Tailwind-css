import React from "react";

function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex-shrink-0 w-64 bg-gray-800">
        <div className="flex items-center justify-center mt-10">
          <span className="text-white text-2xl font-semibold">Logo</span>
        </div>
        <nav className="mt-10">
          <a href="#" className="flex items-center mt-4 py-2 px-6 bg-gray-700 text-gray-100">
            <svg
              className="h-6 w-6 fill-current text-gray-300 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M9 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm4 0a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm4 0a2 2 0 1 0-2-2 2 2 0 0 0 2 2z" />
            </svg>
            <span className="text-white">Dashboard</span>
          </a>
          <a href="#" className="flex items-center mt-4 py-2 px-6 hover:bg-gray-700">
            <svg
              className="h-6 w-6 fill-current text-gray-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 10c-.8-3.1-3.1-5.6-6-6.4V1h-2v2.6C6.1 4.4 3.8 7 3 10c-1.1 4.2 2.1 8.1 6.2 9.2.2.1.5.1.7.1s.5 0 .7-.1C15.9 18.1 19.1 14.2 21 10zM12 20c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zM12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
            </svg>
            <span className="text-gray-500">About</span>
          </a>
          <a href="#" className="flex items-center mt-4 py-2 px-6 hover:bg-gray-700">
            <svg
              className="h-6 w-6 fill-current text-gray-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8 9l-1 6h6l-1.5-9H8zM8 2.2C8 1 8.9 1 9.4 1h5.2c.5 0 .8.4.8 1v1.4L15 15H9l-.5-11.8zM18 7h4c-.6-2.2-2.5-4-4.9-4-1.6 0-3 1-3.7 2.5h1.8c.3-.9 1-1.5 1.9-1.5 1.1 0 2 .9 2 2s-.9 2-2 2H4v2h14.2c1.2 0 2.3 1 2.3 2s-1.1 2-2.3 2H15v2h2c1.7 0 3 1.3 3 3s-1.3 3-3 3H8v1c0 .6-.4 1-1 1s-1-.4-1-1v-1H1c-.6 0-1-.4-1-1s.4-1 1-1h3.1c.6-2.3 2.5-4 4.9-4 1.6 0 3 1 3.7-2.5H12c-.3.9-1 1.5-1.9 1.5-1.1 0-2-.9-2-2s.9-2 2-2h9V7z" />
            </svg>
            <span className="text-gray-500">Hero</span>
          </a>
        </nav>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white border-b-2 border-gray-300">
          <button>
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-800">Dashboard</span>
          <div className="flex items-center">
            <button>
              <svg
                className="h-6 w-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {/* Your main content goes here */}
          <div className="p-6">Content goes here</div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
