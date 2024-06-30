import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';



export default function SelectedRecord({ selectedRowData }) {
  const [rowData, setRowData] = React.useState([])
  //  const data=JSON.parse(localStorage.getItem("selectedRows"))
  //  console.log(data,"selected TABLE DATA");
  // const selectData=useSelector((state)=>state.data.selectedData)
  //  React.useEffect(()=>{
  //   setRowData(selectData)
  //  },[])

  React.useEffect(()=>{
    setRowData(selectedRowData)
  },[selectedRowData])

  console.log(rowData, "selectedRowData row data ......");


  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        // maxHeight: 250, // Adjusting height to show only 3 rows
        maxHeight: "100%", // Adjusting height to show only 3 rows
        overflow: 'auto',
        marginLeft: 5
      }}
    >
      <Table
        sx={{ minWidth: '100%', boxShadow: '20px' }}
        aria-label="simple table"
        size="small"
        stickyHeader // To make the header sticky while scrolling
      >
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {rowData.length==0? (
    <TableRow>
      <TableCell colSpan={5} align="center">
        No items selected...
      </TableCell>  
    </TableRow>
  ) : (
    rowData.map((row, index) => (
      <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left">{index + 1}</TableCell>
        <TableCell component="th" scope="row">{row?.category}</TableCell>
        <TableCell align="left">{row?.price}</TableCell>
        <TableCell>{row?.rating?.rate}</TableCell>
        <TableCell>{row?.rating?.count}</TableCell>
      </TableRow>
    ))
  )}
</TableBody>
      </Table>
    </TableContainer>
  );
}
