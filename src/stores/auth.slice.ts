import { IUserResponse } from '@/common/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  profile: IUserResponse | null;
}

const initialState: IInitialState = {
  profile: null
};

/* Creating a slice of the redux store. */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload !== null ? { ...action.payload } : null;
    },

    reset: () => initialState
  }
});

export const { setProfile, reset } = authSlice.actions;

export default authSlice.reducer;
