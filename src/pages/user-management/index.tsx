import { QueryKeyConstants } from '@/common/constants';
import { IUserCreateRequest } from '@/common/interfaces';
import UserManagementTable from '@/components/organisms/UserManagementTable';
import userService from '@/services/user';
import { CircularProgress } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';

const UserManagementPage = () => {
  const {
    data: userListing,
    isLoading,
    refetch
  } = useQuery({
    queryKey: [QueryKeyConstants.getUserListing],
    queryFn: () => userService.listing({ queryFields: {}, orderFields: { createdAt: 1 } }, { page: 1, size: Number.MAX_SAFE_INTEGER })
  });

  const { mutate: createUserMutate } = useMutation((data: IUserCreateRequest) => userService.create(data), {
    onSuccess: () => {
      refetch();
    }
  });

  return <>{!isLoading && userListing ? <UserManagementTable data={userListing.results} onCreate={createUserMutate} /> : <CircularProgress />}</>;
};

export default UserManagementPage;
