import { IHeadCell } from '@/components/molecules/PaymentHistoryTableHead';

export interface IDataMock {
  id: number;
  fullName: string;
  username: string;
  money: number;
  createAt: string;
  protein: number;
}

const createData = (id: number, fullName: string, username: string, money: number, createAt: string, protein: number): IDataMock => {
  return { id, fullName, username, money, createAt, protein };
};

export const PaymentHistoryMockRows = [
  createData(1, 'User 1', 'username1', 100000, '2023-12-07T16:45:27.904Z', 4.3),
  createData(2, 'User 2', 'username2', 100000, '2023-12-07T16:46:27.904Z', 4.9),
  createData(3, 'User 3', 'username3', 100000, '2023-12-07T16:47:27.904Z', 6.0),
  createData(4, 'User 4', 'username4', 100000, '2023-12-07T16:48:27.904Z', 4.0),
  createData(5, 'User 5', 'username5', 100000, '2023-12-07T16:49:27.904Z', 3.9),
  createData(6, 'User 6', 'username6', 100000, '2023-12-07T16:50:27.904Z', 6.5),
  createData(7, 'User 7', 'username7', 100000, '2023-12-07T16:51:27.904Z', 4.3),
  createData(8, 'User 8', 'username8', 100000, '2023-12-07T16:52:27.904Z', 0.0),
  createData(9, 'User 9', 'username9', 100000, '2023-12-07T16:53:27.904Z', 7.0),
  createData(10, 'User 10', 'username10', 100000, '2023-12-07T16:54:27.904Z', 0.0),
  createData(11, 'User 11', 'username11', 100000, '2023-12-07T16:55:27.904Z', 2.0),
  createData(12, 'User 12', 'username12', 100000, '2023-12-07T16:56:27.904Z', 37.0),
  createData(13, 'User 13', 'username13', 100000, '2023-12-07T16:57:27.904Z', 4.0)
];

export const PaymentHistoryMockHeadCell: IHeadCell[] = [
  { id: 'fullName', numeric: false, disablePadding: true, label: 'Full name' },
  { id: 'username', numeric: true, disablePadding: false, label: 'Username' },
  { id: 'money', numeric: true, disablePadding: false, label: 'Money' },
  { id: 'createAt', numeric: true, disablePadding: false, label: 'Create At' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein' }
];
