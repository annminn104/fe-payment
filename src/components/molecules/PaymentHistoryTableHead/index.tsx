import { OrderType } from '@/common/interfaces';
import { IDataMock } from '@/common/mocks';
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export interface IHeadCell {
  disablePadding: boolean;
  id: keyof IDataMock;
  label: string;
  numeric: boolean;
}

interface IPaymentHistoryTableHeadProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IDataMock) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: OrderType;
  orderBy: string;
  rowCount: number;
  headCells: IHeadCell[];
}

const PaymentHistoryTableHead: React.FC<IPaymentHistoryTableHeadProps> = ({
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
  headCells
}) => {
  const createSortHandler = (property: keyof IDataMock) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default PaymentHistoryTableHead;
