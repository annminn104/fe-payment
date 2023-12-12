import { QueryKeyConstants } from '@/common/constants';
import PaymentHistoryTable from '@/components/organisms/PaymentHistoryTable';
import { paymentService } from '@/services/payment';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const PaymentHistoryPage = () => {
  const { data: dataPaymentHistory, isLoading } = useQuery({
    queryKey: [QueryKeyConstants.getPaymentHistory],
    queryFn: () => paymentService.listing({ queryFields: {}, orderFields: { createdAt: -1 } }, { page: 1, size: Number.MAX_SAFE_INTEGER })
  });

  return (
    <React.Fragment>
      {isLoading ? <CircularProgress /> : <PaymentHistoryTable data={dataPaymentHistory ? dataPaymentHistory.results : []} />}
    </React.Fragment>
  );
};

export default PaymentHistoryPage;
