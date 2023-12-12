/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Paper, Checkbox, Typography } from '@mui/material';
import { PaymentHistoryMockHeadCell } from '@/common/mocks';
import { TableHelpers } from '@/common/helpers';
import { OrderType } from '@/common/interfaces';
import PaymentHistoryTableHead from '@/components/molecules/PaymentHistoryTableHead';
import TableToolbar from '@/components/molecules/TableToolbar';
import { IPaymentHistory, IPaymentHistoryListTableData } from '@/common/interfaces/payment';
import { TimeUtils } from '@/common/utils';
import { NumberUtils } from '../../../common/utils/number';

interface IPaymentHistoryTableProps {
  data: IPaymentHistory;
}

const PaymentHistoryTable: React.FC<IPaymentHistoryTableProps> = ({ data }) => {
  const [order, setOrder] = React.useState<OrderType>('desc');
  const [orderBy, setOrderBy] = React.useState<keyof IPaymentHistoryListTableData>('createdAt');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IPaymentHistoryListTableData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = TableHelpers.stableSort(data, TableHelpers.getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar title='Payment history' numSelected={selected.length} isDense={dense} onDense={handleChangeDense} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
            <PaymentHistoryTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              headCells={PaymentHistoryMockHeadCell}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox color='primary' checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                      {row.fullName}
                    </TableCell>
                    <TableCell align='right'>{row?.user[0]?.username}</TableCell>
                    <TableCell align='right'>{NumberUtils.formatMoney(row.amount, '$')}</TableCell>
                    <TableCell align='right'>{TimeUtils.toDateTime(row.createdAt)}</TableCell>
                    <TableCell align='right'>
                      {row.status ? <Typography color='success.main'>Success</Typography> : <Typography color='error.main'>InCompleted</Typography>}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage='Sizes'
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default PaymentHistoryTable;
