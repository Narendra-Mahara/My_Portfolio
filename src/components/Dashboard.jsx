import { useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";
const Dashboard = () => {
  const navigate = useNavigate();
  async function logout() {
    try {
      let response = await account.deleteSession("current");
      console.log("Logged out!!",response)
      navigate("/login");
    } catch (error) {
      console.error(error);
      
    }
  }
  // return !isUserLoggedIn ? navigate("/") : <div>hello</div>;
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        type="submit"
        className=" p-2 bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
