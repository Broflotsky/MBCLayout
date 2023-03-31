import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import "./DataTable.scss";

const DataTable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default DataTable;
