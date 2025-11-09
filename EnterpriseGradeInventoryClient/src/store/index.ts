import { configureStore } from "@reduxjs/toolkit";
import { interactionReducer } from "./InteractionSlice";
import { registerReducer } from "./RegisterSlice";
import { loginReducer } from "./LoginSlice";
import { InventoryInputReducer } from "./InventorySlice";
import { SearchReducer } from "./InventorySlice";
import { warehouseReducer } from "./WarehouseSlice";

export const store = configureStore({
  reducer: {
    interaction: interactionReducer,
    register: registerReducer,
    login: loginReducer,
    inventoryInput: InventoryInputReducer,
    search: SearchReducer,
    warehouseInput: warehouseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
