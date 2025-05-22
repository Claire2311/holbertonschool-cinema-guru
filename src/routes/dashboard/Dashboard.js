import { BrowserRouter } from "react-router-dom";
import "./dashboard.css";
import AppRoutes from "../../routes/AppRoutes";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <div className="header-container">
          <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div className="content-container">
          <SideBar />
          <div className="main-content">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
