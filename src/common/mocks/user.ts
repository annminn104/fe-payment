import { IHeadCell } from '@/components/molecules/UserTableHead';

export const UserMockHeadCell: IHeadCell[] = [
  { id: 'username', numeric: false, disablePadding: true, label: 'Username' },
  { id: 'fullName', numeric: true, disablePadding: false, label: 'Full name' },
  { id: 'createdAt', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'id', numeric: true, disablePadding: false, label: 'id' }
];
