export interface WarehouseInputTypes {
  id: number;
  warehouseName: string;
  warehouseCode: string;
  address: string;
  manager: string;
  contactEmail: string;
  region: string;
  status: string;
}

export interface WarehouseNameType {
  allWarehouses: {
    warehouseName: string;
  }[];
}

export interface IndividualWarehouseType {
  warehouseName: string;
}
