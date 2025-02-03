import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-4xl mb-4">Welcome! to My Portfolio</h2>
        <p className="text-lg  mb-8 text-slate-500">
          Explore my projects and learn more about my skills and experience.
        </p>
        <Link
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          to={"https://github.com/Narendra-Mahara?tab=repositories"}
          target="_blank"
        >
          View Projects
        </Link>
      </main>
    </div>
  );
};

export default Home;
