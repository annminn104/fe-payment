export enum PaymentStatusEnum {
  Success = 'Success',
  InProgress = 'InProgress',
  Failed = 'Failed'
}

export enum PaymentEndpointEnum {
  Listing = '/payment-history/listing',
  CreateIntent = '/stripe/create-payment-intent'
}
