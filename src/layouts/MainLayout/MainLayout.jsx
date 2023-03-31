import Sidebar from "../../components/SideBar/Sidebar";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <main className="main-layout">
      <Sidebar />
      <div className="wrapper-container">{children}</div>
    </main>
  );
};

export default MainLayout;
