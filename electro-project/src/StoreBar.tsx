import React from 'react';
import { ElectroProductsType } from './App';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import Button from '@mui/material/Button';

type StoreBarProps = {
  electroProducts: ElectroProductsType[];
  upCounter: (count: number, id: string) => void
};

export const StoreBar: React.FC<StoreBarProps> = ({ electroProducts, upCounter }) => {

  

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '80%', margin: 'auto', mt: 4 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {electroProducts.map((product, index) => (
            <Row key={index} product={product} upCounter={upCounter}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

type RowProps = {
  product: ElectroProductsType;
  upCounter: (count: number, id: string) => void
};

const Row: React.FC<RowProps> = ({ product,  upCounter}) => {
  const [open, setOpen] = React.useState(false);
  const consoleLogButtonHandler = (count: number, id: string) => {
    upCounter(count, id )
  }

  return (

    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{product.name}</TableCell>
        <TableCell className ='tabe-cost' align="right">{product.cost}</TableCell>
        <TableCell className ='tabe-count' align="right">
            {product.count}
            {' '}
              <Button onClick={()=>{alert("Hello!")}} variant="outlined" size="small">
                -
              </Button>
              <Button variant="outlined" size="small">
                +
              </Button>

              <Button variant="outlined" size="small" onClick={() => {consoleLogButtonHandler(1, product.id)}}>
                console.log
              </Button>

        </TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Detail 1</TableCell>
                    <TableCell>Detail 2</TableCell>
                    <TableCell align="right">Detail 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Здесь можно добавить дополнительные детали о продукте */}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Example Detail 1
                    </TableCell>
                    <TableCell>Example Detail 2</TableCell>
                    <TableCell align="right">Example Detail 3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
