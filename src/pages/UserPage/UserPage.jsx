import DataTable from "../../components/DataTable/DataTable";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "./UserPage.scss";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const UserPage = () => {
  return (
    <MainLayout>
      <div className="userpage">
        <div className="header-container">
          <h1>All Users</h1>
          <div className="button-add">
            <PersonAddAlt1Icon />
            <span>Add User</span>
          </div>
        </div>
        <DataTable />
      </div>
    </MainLayout>
  );
};

export default UserPage;
