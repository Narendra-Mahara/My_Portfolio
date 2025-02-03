import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="min-h-screen flex flex-col   bg-gray-900 text-white ">
      <main className="flex-grow flex flex-col items-center  p-14">
        <h2 className="text-4xl mb-4">About Me</h2>
        <p className="text-lg mb-8 text-justify md:text-left text-slate-400">
          Hello! I'm Narendra Mahara, a passionate software developer with
          experience in building web applications. I love to learn new
          technologies and improve my skills.
        </p>
        <p className="text-lg mb-8  text-justify md:text-left text-slate-400">
          I have worked on various projects involving different technologies and
          frameworks. My goal is to create efficient and scalable applications
          that provide a great user experience.
        </p>
        <p className="text-lg mb-8  text-justify md:text-left text-slate-400">
          In my free time, exploring new tools and libraries.
        </p>

        <div>
          <button
            className="mx-2 my-1 md:my-0 bg-purple-600 text-white  px-5 py-2 rounded hover:bg-purple-700"
            onClick={() => {
              setShowMessage(true);
              setTimeout(() => {
                setShowMessage(false);
              }, 2000);
            }}
          >
            Know about me
          </button>

          {showMessage ? (
            <div className="bg-gray-800 text-white p-2 rounded mt-4 transition-all ease-in  duration-300">
              😌 Comming soon...
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
