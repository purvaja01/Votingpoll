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
import {Link} from "react-router-dom";
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

  
const [rows , setrows] = React.useState([])
  React.useEffect(()=>{
    axios.get("http://localhost:8001/createpoll/questions").then((result)=>{
      console.log(result.data.questions);
      setrows(result.data.questions)
    })
  },[])

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <h3 style={{paddingLeft:"18%"}}>Welcome Admin <Button  variant="contained" sx={{backgroundColor:"#ffff", marginLeft:"50%"}}><Link to={"/Createpole"}>Create Pole</Link> </Button></h3>
      <TableContainer
        sx={{ maxHeight: 420, maxWidth: 850, marginX: "auto", right: 0 }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell>
                  id
                </TableCell>
                <TableCell>
                  Question
                </TableCell>
                <TableCell>
                  
                </TableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                
                        <TableCell >
                        {row.id}
                        </TableCell>
                        <TableCell >
                        {row.question}
                        </TableCell>
                        <TableCell >
                        <Button variant="contained" sx={{backgroundColor: "#19015B" }}>Remove</Button>
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
