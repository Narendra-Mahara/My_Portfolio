import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex pt-10 h-dvh  justify-center  bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded-lg shadow-md w-80 h-fit">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Sign Up
        </button>
        <p className="mt-2">
          Already signed in? Login
          <Link to={"/login"} className="text-blue-500 underline ml-1 cursor-pointer">
             here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
