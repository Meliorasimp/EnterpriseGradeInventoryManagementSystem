import { type InventoryInputTypes } from "../../types/inventory";
import { createSlice } from "@reduxjs/toolkit";

const initialInventoryInputState: InventoryInputTypes[] = [];

const InventoryInputSlice = createSlice({
  name: "inventoryInput",
  initialState: initialInventoryInputState,
  reducers: {
    addNewRow(state: InventoryInputTypes[]) {
      state.push({
        id: Date.now(), // Add unique ID
        sku: "",
        productName: "",
        category: "",
        warehouseLocation: "",
        quantityInStock: 0,
        reorderLevel: 0,
        unitOfMeasure: "",
        costPerUnit: 0,
      });
    },
    removeRow(state: InventoryInputTypes[], action) {
      return state.filter((row) => row.id !== action.payload);
    },
    updateRow(state: InventoryInputTypes[], action) {
      const { id, field, value } = action.payload;
      const row = state.find((row) => row.id === id);
      if (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (row as any)[field] = value;
      }
    },
  },
});

export const { addNewRow, removeRow, updateRow } = InventoryInputSlice.actions;
export const InventoryInputReducer = InventoryInputSlice.reducer;
