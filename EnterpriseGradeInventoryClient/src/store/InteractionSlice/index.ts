import { type InteractionType } from "../../types/interaction";
import { createSlice } from "@reduxjs/toolkit";

const initialInteractionState: InteractionType = {
  //Register Modal State Logic
  isRegisterModalOpen: false,
  //Login Modal State Logic
  isLoginModalOpen: false,
  //Inventory Modal State Logic
  isInventoryModalOpen: false,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialInteractionState,
  reducers: {
    //Register Modal Reducers
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
    //Login Modal Reducers
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
    //Inventory Modal Reducers
    setIsInventoryModalOpen(state, action) {
      state.isInventoryModalOpen = action.payload;
    },
    //Switch Modals Reducers
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
  setIsInventoryModalOpen,
  switchToLoginModal,
  switchToRegisterModal,
} = interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
