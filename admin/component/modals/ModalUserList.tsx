import React, { useContext } from "react";
import { Box, Modal, Button, Typography } from "@mui/material";
import UserContext from "../../context/UserContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function ModalUserList() {
  const { handleCloseUsers, showUser, users, setUsers } =
    useContext(UserContext);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
  };

  const handleDelete = (index: number) => {
    setUsers(users.filter((row: any, i: number) => i !== index));
  };
  return (
    <div>
      <Modal
        open={showUser}
        onClose={handleCloseUsers}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size='small'
              aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Password</TableCell>
                  <TableCell align='right'>Admin</TableCell>
                  <TableCell align='right'>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row: any, index: number) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.password}</TableCell>
                    {row.admin === true ? (
                      <TableCell align='right'>Yes</TableCell>
                    ) : (
                      <TableCell align='right'>No</TableCell>
                    )}
                    <TableCell align='right'>
                      <IconButton onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            type='button'
            variant='contained'
            style={{
              marginTop: 10,
              borderRadius: "5px",
              padding: 5,
              color: "black",
            }}>
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalUserList;
