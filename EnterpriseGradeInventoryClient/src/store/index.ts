import { configureStore } from "@reduxjs/toolkit";
import { interactionReducer } from "./InteractionSlice";
import { registerReducer } from "./RegisterSlice";
import { loginReducer } from "./LoginSlice";

export const store = configureStore({
  reducer: {
    interaction: interactionReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
