import { useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const checkLogin = () => {
    account
      .get()
      .then((response) => {
        console.log("Logged in!!", response);
        setUser(response);
        setIsLogged(true);
        
      })
      .catch((error) => {
        console.error("Not logged in!!", error);
        setIsLogged(true);
        navigate("/login");
      });
  };
  useEffect(() => {
    checkLogin();
  }, []);

  async function logout() {
    try {
      let response = await account.deleteSession("current");
      console.log("Logged out!!", response);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  return isLogged ? (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome <span className="font-bold"> {user.name} </span> to the dashboard
      </p>
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
  ) : (
    <div>Loading...</div>
  );
};

export default Dashboard;
