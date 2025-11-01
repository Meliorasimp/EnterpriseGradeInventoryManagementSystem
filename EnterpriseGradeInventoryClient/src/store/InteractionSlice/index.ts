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
  },
});

export const { setIsRegisterModalOpen, setIsLoginModalOpen } =
  interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
