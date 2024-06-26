import { IUserCreateRequest, IUserFormCreateRequest } from '@/common/interfaces';
import { UserSchema } from '@/common/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiUserPlus, FiX } from 'react-icons/fi';

interface ICreateUserFormProps {
  onCreate: (values: IUserCreateRequest) => void;
}

const CreateUserForm: React.FC<ICreateUserFormProps> = ({ onCreate }) => {
  const validationSchema = UserSchema.pick(['email', 'password', 'fullName']);
  const [open, setOpen] = React.useState(false);

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleSubmitForm = (data: IUserFormCreateRequest) => {
    const rawData: IUserCreateRequest = {
      ...data,
      username: data.email
    };
    onCreate(rawData);
    handleClose();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen} startIcon={<FiUserPlus size='16' />}>
        Add new user
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        component='form'
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <DialogTitle id='alert-dialog-title' color='primary'>
          Create new user
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <FiX />
        </IconButton>
        <DialogContent>
          <Controller
            name='fullName'
            control={control}
            defaultValue=''
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin='normal'
                required
                fullWidth
                id='fullName'
                label='Full Name'
                name='fullName'
                autoComplete='fullName'
                autoFocus
                value={field.value}
                onChange={field.onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                autoFocus
                value={field.value}
                onChange={field.onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={field.value}
                onChange={field.onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' sx={{ width: '100px' }}>
            Cancel
          </Button>
          <Button type='submit' autoFocus variant='contained' sx={{ width: '100px' }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreateUserForm;
