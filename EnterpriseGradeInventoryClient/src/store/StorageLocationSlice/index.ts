import { type StorageLocationInputTypes } from "../../types/storagelocation";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialStorageLocationInputState: StorageLocationInputTypes[] = [];

const storageLocationSlice = createSlice({
  name: "storageLocationInput",
  initialState: initialStorageLocationInputState,
  reducers: {
    addNewRow(state: StorageLocationInputTypes[]) {
      state.push({
        id: Date.now(), // Add unique ID
        locationCode: "",
        sectionName: "",
        warehouseName: "",
        storageType: "",
        maxCapacity: 0,
        unitType: "",
      });
    },
    removeRow(
      state: StorageLocationInputTypes[],
      action: PayloadAction<number>
    ) {
      return state.filter((row) => row.id !== action.payload);
    },
    updateRow(state: StorageLocationInputTypes[], action) {
      const { id, field, value } = action.payload;
      const existingRow = state.find((row) => row.id === id);
      if (existingRow) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (existingRow as any)[field] = value;
      }
    },
  },
});

export const { addNewRow, removeRow, updateRow } = storageLocationSlice.actions;
export const storageLocationReducer = storageLocationSlice.reducer;
