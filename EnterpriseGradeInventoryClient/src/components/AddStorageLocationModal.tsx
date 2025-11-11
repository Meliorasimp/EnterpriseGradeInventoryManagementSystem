import { useDispatch, useSelector } from "react-redux";
import { setIsStorageLocationModalOpen } from "../store/InteractionSlice";
import { addNewRow } from "../store/StorageLocationSlice";
import { updateRow } from "../store/StorageLocationSlice";
import type { RootState } from "../store";
import { useQuery } from "@apollo/client/react/compiled";
import type { WarehouseNameType } from "../types/warehouse";
import getAllWarehouse from "../gql/query/warehouseQuery/warehouseQuery.gql";
const AddStorageLocationModal = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsStorageLocationModalOpen(false));
  };

  const storageLocationInputData = useSelector(
    (state: RootState) => state.storageLocationInput
  );

  const { data: warehouseQueryData } =
    useQuery<WarehouseNameType>(getAllWarehouse);
  console.log("Warehouse Data:", warehouseQueryData);
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-lg p-10 w-[90%] h-[95%] z-50"
      >
        <h1 className="text-2xl">Add Storage Location</h1>
        <form className="mt-4">
          <div className="overflow-x-auto max-w-full h-[80vh]">
            <table className="border-collapse w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Location Code
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Section Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Warehouse Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Storage Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Max Capacity
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Unit Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {storageLocationInputData.length == 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-3 text-center text-sm text-gray-500"
                    >
                      No warehouse data available.
                    </td>
                  </tr>
                ) : (
                  storageLocationInputData.map((location, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="SL-001"
                          value={location.locationCode}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: location.id,
                                field: "locationCode",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="SL-001"
                          value={location.sectionName}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: location.id,
                                field: "sectionName",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          className="appearance-none bg-gray-50 border border-gray-300 rounded-xl px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="" className="text-gray-400">
                            🏢 Select Warehouse
                          </option>
                          {warehouseQueryData?.allWarehouses.map((w, index) => (
                            <option key={index} value={w.warehouseName}>
                              {w.warehouseName}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="SL-001"
                          value={location.storageType}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: location.id,
                                field: "storageType",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="SL-001"
                          value={location.maxCapacity}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: location.id,
                                field: "maxCapacity",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="SL-001"
                          value={location.unitType}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: location.id,
                                field: "unitType",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="px-4 py-2 bg-lime-600 text-white rounded-md cursor-pointer hover:bg-lime-700 transition-colors flex items-center gap-2"
                onClick={() => dispatch(addNewRow())}
              >
                Add New Row
              </button>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-lime-600 text-white rounded-md cursor-pointer hover:bg-lime-700 transition-colors"
              >
                Save Warehouse Info
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStorageLocationModal;
