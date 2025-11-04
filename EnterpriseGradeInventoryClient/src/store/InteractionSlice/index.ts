import { type InteractionType } from "../../types/interaction";
import { createSlice } from "@reduxjs/toolkit";

const initialInteractionState: InteractionType = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialInteractionState,
  reducers: {
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
    switchToLoginModal(state) {
      state.isRegisterModalOpen = false;
      state.isLoginModalOpen = true;
    },
    switchToRegisterModal(state) {
      state.isRegisterModalOpen = true;
      state.isLoginModalOpen = false;
    },
  },
});

export const {
  setIsRegisterModalOpen,
  setIsLoginModalOpen,
  switchToLoginModal,
  switchToRegisterModal,
} = interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
