import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
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
  const [rows1, setrows1] = React.useState([]);
  const data = JSON.parse(localStorage.getItem("loggedinuser"))

  React.useEffect(() => {
    axios
      .get("http://localhost:8001/createpoll")
      .then((result) => {
        // console.log(result.data.questions);
        const data = result.data.questions.map((item) => ({
          id: item.id,
          question: item.question,
        }));
        // console.log(data);
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
      //   console.log("Server response:", response.data); // Check the server's response

      // Assuming the server responds with some data indicating success
      if (response.data.success) {
        console.log("Row soft deleted successfully:", id);
        // setDeleted(true);
        setTimeout(() => {
          window.location.reload();
        });

        // Update the rows state to remove the deleted row
        setrows((prevRows) => prevRows.filter((row) => row.id !== id));
        // console.log(rows);
      } else {
        console.error("Soft delete operation failed:", response.data.error);
        setTimeout(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.error("Error soft deleting row:", error);
    }
  };

  const [expandedRowId, setExpandedRowId] = React.useState(null);

  const handleRowClick = async (rowId) => {
    // Toggle the expanded state. If it's already open, close it; otherwise, open it.
    setExpandedRowId((prevState) => (prevState === rowId ? null : rowId));
    const response = await axios.post("http://localhost:8001/polldata", {
      id: rowId,
    });
    setrows1(JSON.parse(response.data.data.choices));
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <h3 style={{ paddingLeft: "18%" }}>
        Welcome {data.name}
        
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
      
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.question}</TableCell>
                    <TableCell>
                      {expandedRowId === row.id && (
                        <div className="expanded-content">
                          <h3>{row.question}</h3>
                          {/* <ul>
                            {rows1.map((choice, index) => (
                              <li key={index}>{choice}</li>
                            ))} */}
                          
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                            >
                              {rows1.map((choice,index) => (
                                <FormControlLabel
                                  value={choice}
                                  control={<Radio />}
                                  label={choice}
                                />
                              ))}
                            </RadioGroup>
                            <Button>Submit</Button>
                          </FormControl>

                          

                          {/* </ul> */}
                        </div>
                      )}
                    </TableCell>
                    <TableCell  onClick={() => handleRowClick(row.id)}><ExpandMoreIcon/></TableCell>
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
