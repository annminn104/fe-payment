import { alpha, Toolbar, Typography, FormControlLabel, Switch, Tooltip, IconButton } from '@mui/material';
import { FiTrash2, FiFilter } from 'react-icons/fi';

interface ITableToolbarProps {
  title: string;
  numSelected: number;
  isDense: boolean;
  onDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
}

const TableToolbar: React.FC<ITableToolbarProps> = ({ title, numSelected, isDense, onDense, onDelete }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
          {title}
        </Typography>
      )}
      <FormControlLabel control={<Switch checked={isDense} onChange={onDense} />} label='Dense padding' sx={{ width: '200px' }} />
      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton onClick={onDelete}>
            <FiTrash2 />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton>
            <FiFilter />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default TableToolbar;
