import { IHeadCell } from '@/components/molecules/PaymentHistoryTableHead';

export const PaymentHistoryMockHeadCell: IHeadCell[] = [
  { id: 'fullName', numeric: false, disablePadding: true, label: 'Full name' },
  { id: 'user', numeric: true, disablePadding: false, label: 'Username' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'createdAt', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' }
];

export const PaymentButtonMock = [
  { label: '50$', value: 5000 },
  { label: '100$', value: 10000 },
  { label: '200$', value: 20000 },
  { label: '500$', value: 50000 },
  { label: '1000$', value: 100000 },
  { label: '2000$', value: 200000 },
  { label: '5000$', value: 500000 },
  { label: '10000$', value: 1000000 }
];
