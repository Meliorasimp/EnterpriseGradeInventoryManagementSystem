import { configureStore } from "@reduxjs/toolkit";
import { interactionReducer } from "./InteractionSlice";
import { registerReducer } from "./RegisterSlice";
import { loginReducer } from "./LoginSlice";
import { InventoryInputReducer } from "./Inventory";
import { SearchReducer } from "./Inventory";

export const store = configureStore({
  reducer: {
    interaction: interactionReducer,
    register: registerReducer,
    login: loginReducer,
    inventoryInput: InventoryInputReducer,
    search: SearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
