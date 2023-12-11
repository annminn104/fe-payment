import { QueryKeyConstants } from '@/common/constants';
import PaymentHistoryTable from '@/components/organisms/PaymentHistoryTable';
import { paymentService } from '@/services/payment';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const PaymentHistoryPage = () => {
  const { data: dataPaymentHistory, isLoading } = useQuery({
    queryKey: [QueryKeyConstants.getPaymentHistory],
    queryFn: () => paymentService.listing({ queryFields: {}, orderFields: { createdAt: 1 } }, { page: 1, size: Number.MAX_SAFE_INTEGER })
  });

  return <React.Fragment>{!isLoading ? <PaymentHistoryTable data={dataPaymentHistory?.results || []} /> : null}</React.Fragment>;
};

export default PaymentHistoryPage;
