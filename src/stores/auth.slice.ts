import { User } from '@/common/models';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  profile: User | null;
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
