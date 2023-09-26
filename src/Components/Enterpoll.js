import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const columns = [
  { id: "name", label: "Sno.", minWidth: 170 },
  { id: "code", label: "Created\u00a0Pole", minWidth: 100 },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const [deleted, setDeleted]= React.useState(false);
  const [rows, setrows] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8001/createpoll")
      .then((result) => {
        // console.log(result.data.questions);
        const data = result.data.questions.map((item) => ({
          id: item.id,
          question: item.question,
        }));
        setrows(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSoftDelete = async (id) => {
    console.log("Soft deleting row with id:", id);

    try {
      const response = await axios.delete(
        `http://localhost:8001/softDelete/${id}`
      );
      console.log("Server response:", response.data); // Check the server's response

      // Assuming the server responds with some data indicating success
      if (response.data.success) {
        console.log("Row soft deleted successfully:", id);
        // setDeleted(true);
        setTimeout(()=>{
          window.location.reload()

        })

        // Update the rows state to remove the deleted row
        setrows((prevRows) => prevRows.filter((row) => row.id !== id));
      } else {
        console.error("Soft delete operation failed:", response.data.error);
        setTimeout(()=>{
          window.location.reload()

        })
      }
    } catch (error) {
      console.error("Error soft deleting row:", error);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <h3 style={{ paddingLeft: "18%" }}>
        Welcome Admin{" "}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ffff", marginLeft: "50%" }}
        >
          <Link to={"/Createpole"}>Create Pole</Link>{" "}
        </Button>
      </h3>
      <TableContainer
        sx={{ maxHeight: 420, maxWidth: 850, marginX: "auto", right: 0 }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Question</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.question}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#19015B" }}
                        onClick={() => handleSoftDelete(row.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ marginRight: 35 }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
