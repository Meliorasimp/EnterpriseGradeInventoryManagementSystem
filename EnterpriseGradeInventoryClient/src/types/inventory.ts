export interface InventoryInputTypes {
  id: number;
  sku: string;
  productName: string;
  category: string;
  warehouseLocation: string;
  quantityInStock: number;
  reorderLevel: number;
  unitOfMeasure: string;
  costPerUnit: number;
}
