export interface StorageLocationInputTypes {
  id: number;
  locationCode: string;
  sectionName: string;
  warehouseId: number;
  storageType: string;
  maxCapacity: number;
  unitType: string;
}

export interface StorageLocationResponseType {
  id: number;
  locationCode: string;
  maxCapacity: number;
  unitType: string;
  storageType: string;
  sectionName: string;
  createdAt: string;
  warehouse?: {
    id: number;
    warehouseName: string;
    warehouseCode: string;
  };
  user?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface StorageLocationQueryResponse {
  allStorageLocations: StorageLocationResponseType[];
}
