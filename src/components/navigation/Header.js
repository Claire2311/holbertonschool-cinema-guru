import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.css";

function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <div className="header">
      <div>Cinema Guru</div>
      <div className="header_user">
        <img src="https://picsum.photos/100/100" />
        <p>Welcome, {userUsername}!</p>
        <span onClick={logout}>
          {<FontAwesomeIcon icon={faSignOut} />} Logout
        </span>
      </div>
    </div>
  );
}

export default Header;
