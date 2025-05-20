import { Route, Routes } from "react-router-dom";
import HomePage from "./dashboard/HomePage";
import Favorites from "./dashboard/Favorites";
import WatchLater from "./dashboard/WatchLater";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default Routes;
