import { IHeadCell } from '@/components/molecules/UserTableHead';

export const UserMockHeadCell: IHeadCell[] = [
  { id: 'fullName', numeric: false, disablePadding: true, label: 'Full name' },
  { id: 'username', numeric: true, disablePadding: false, label: 'Username' },
  { id: 'id', numeric: true, disablePadding: false, label: 'id' }
];
