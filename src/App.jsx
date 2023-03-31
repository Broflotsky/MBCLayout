// React & Router
import { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
// Context & Utils
import { AuthContext } from "./context/AuthContext";
import { PathRoutes } from "./utils/path.utils";
// Pages views
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = () => {
    return currentUser ? <Outlet /> : <Navigate to={PathRoutes.LOGIN} />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* PUBLIC & ERROR ROUTES */}
          <Route path={PathRoutes.LOGIN} element={<AuthPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          {/* PROTECTED ROUTES */}
          <Route element={<RequireAuth />}>
            <Route path={PathRoutes.DASHBOARD} element={<HomePage />} />
            <Route path={PathRoutes.USERS} element={<UserPage />} />
            <Route path={PathRoutes.PRODUCTS} element={<h1>Products</h1>} />
            <Route path={PathRoutes.ORDERS} element={<h1>Orders</h1>} />
            <Route path={PathRoutes.CHARTS} element={<h1>Charts</h1>} />
            <Route path={PathRoutes.PROMOTIONS} element={<h1>Promotions</h1>} />
            <Route
              path={PathRoutes.NOTIFICATION}
              element={<h1>Notifications</h1>}
            />
            <Route path={PathRoutes.PROFILE} element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
