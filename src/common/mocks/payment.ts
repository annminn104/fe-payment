import { IHeadCell } from '@/components/molecules/PaymentHistoryTableHead';

export const PaymentHistoryMockHeadCell: IHeadCell[] = [
  { id: 'fullName', numeric: false, disablePadding: true, label: 'Full name' },
  { id: 'user', numeric: true, disablePadding: false, label: 'Username' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'createdAt', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' }
];

export const PaymentButtonMock = [
  { label: '$50', value: 50 },
  { label: '$100', value: 100 },
  { label: '$200', value: 200 },
  { label: '$500', value: 500 },
  { label: '$1.000', value: 1000 },
  { label: '$2.000', value: 2000 },
  { label: '$5.000', value: 5000 },
  { label: '$10.000', value: 10000 }
];
