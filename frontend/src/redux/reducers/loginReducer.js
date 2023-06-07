import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  isOpen: false,
  isClicked: false,
  isLoading: false,
  isLogin: false,
  isApproved: false,
  isRejecte: false,
  approvedId: null,
  approvedItems: [],
  rejectedItems: [],
  popClosed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.isLogin = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
      state.isLogin = false;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.isOpen = false;
      state.isClicked = false;
      state.isLoading = false;
      state.isLogin = false;
      state.isApproved = false;
      state.isRejecte = false;
      state.approvedId = null;
      state.approvedItems = [];
      state.rejectedItems = [];
    },
    humergerMenu: (state) => {
      state.isClicked = !state.isClicked;
    },
    approved: (state, action) => {
      const itemId = action.payload;
      const index = state.approvedItems.indexOf(itemId);
      if (index === -1) {
        // If the item ID is not in the approvedItems array, add it
        state.approvedItems.push(itemId);
        state.isApproved = !state.isApproved;
      } else {
        // If the item ID is already in the approvedItems array, remove it
        state.approvedItems.splice(index, 1);
      }
    },
    rejected: (state, action) => {
      const itemId = action.payload;
      const index = state.rejectedItems.indexOf(itemId);
      if (index === -1) {
        // If the item ID is not in the approvedItems array, add it
        state.rejectedItems.push(itemId);
      } else {
        // If the item ID is already in the approvedItems array, remove it
        state.rejectedItems.splice(index, 1);
      }
    },
    popClose: (state, action) => {
      state.popClosed = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  humergerMenu,
  approved,
  rejected,
  popClose,
} = authSlice.actions;

export default authSlice.reducer;
