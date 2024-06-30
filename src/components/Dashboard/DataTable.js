// import React, { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TablePagination from '@mui/material/TablePagination';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData, deleteRowData, selectRowData } from '../../redux/actions/dataAction';


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton, TablePagination, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchData, selectRowData, deleteRowData } from '../../redux/actions/dataAction';


export default function DataTable({ onSelect }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([])
  const dispatch = useDispatch()

  const data = useSelector((state) => state)
  
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (data && data.data && data.data.data) {
      localStorage.setItem('getData', JSON.stringify(data.data.data));
    }
  }, [data]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('getData'));
    setTableData(storedData)
  }, [dispatch, data]);

  const selectHandler =  (id) => {
    dispatch(selectRowData(id))
    const data = JSON.parse(localStorage.getItem("selectedRows"))
    onSelect(data)
  }

  const deleteHandler = (id) => {
    dispatch(deleteRowData(id))
    const data = JSON.parse(localStorage.getItem("selectedRows"))
    onSelect(data)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to the first page on new search
  };

  const filteredRows = tableData.filter((row) =>
    row.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredRows.length - page * rowsPerPage);

  return (
    <>
<Typography sx={{ fontWeight: 'bold', fontSize: '22px', marginLeft:2 ,position:'relative',top:20}} >Records</Typography>

    <Box sx={{ display: 'flex', flexDirection: "column" }}>
      
      <TextField
        variant="standard"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          justifyContent: 'flex-end',
          boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "5px",
          marginBottom: 1,
          height: "40px",
          width: "250px",
          marginLeft: "auto",
          '& .MuiInputLabel-root': {
            color: 'lightgray',
            fontWeight: 'bold',
            fontSize: '20px',
            position: "absolute",
            top: "12px",
            left: "20px"
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          )
        }}
      />
      
      <TableContainer component={Paper} style={{ maxHeight: 200 }}>
        <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}> Category</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Price </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Rating</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Count</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Select</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => (

              <TableRow key={row?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                {/* <TableCell >{row?.index+1}</TableCell> */}
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell component="th" scope="row">{row?.category}</TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>{row?.price}</TableCell>
                <TableCell>{row?.rating?.rate}</TableCell>
                <TableCell>{row?.rating?.count}</TableCell>
                <TableCell align='center'><Button variant="contained" sx={{ backgroundColor: "#6960ec", width: "100px", height: "23px" }} onClick={() => selectHandler(row.id)} >Select</Button></TableCell>
                <TableCell align='center'><Button onClick={() => deleteHandler(row.id)} variant="contained" sx={{ backgroundColor: "red", width: "100px", height: "23px" }}>Delete</Button></TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]} // Options for rows per page
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
    </>
  );
}
