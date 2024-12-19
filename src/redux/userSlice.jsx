import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  editIndex: null,
};

const userSlice = createSlice({ 
  name: 'user',  
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { index, data } = action.payload;
      state.users[index] = data;
    },
    removeUser: (state, action) => {
      const index = action.payload;
      state.users.splice(index, 1);
    },
    setEditIndex: (state, action) => {
      state.editIndex = action.payload;
    },
    resetEditIndex: (state) => {
      state.editIndex = null;
    },
  }
});

export const { addUser, updateUser, removeUser, setEditIndex, resetEditIndex } = userSlice.actions;
export default userSlice.reducer;
