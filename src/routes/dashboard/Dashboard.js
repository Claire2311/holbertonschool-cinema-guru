import { BrowserRouter } from "react-router-dom";
import "./dashboard.css";
import AppRoutes from "../../routes/AppRoutes";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div>
          <SideBar />
        </div>
        <div>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
