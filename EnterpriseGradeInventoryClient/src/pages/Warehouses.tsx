import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setIsWarehouseModalOpen } from "../store/InteractionSlice";
import type { RootState } from "../store";
import { lazy, Suspense } from "react";
const Warehouse = lazy(() => import("../components/AddWarehouseModal"));

const Warehouses = () => {
  const dispatch = useDispatch();
  const { isWarehouseModalOpen } = useSelector(
    (state: RootState) => state.interaction
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="min-h-full p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Warehouses</h1>
            <p className="text-gray-600 mt-2">
              Manage and monitor all your warehouse locations in one place.
            </p>
          </div>
          <div className="h-[6vh] flex justify-between mb-6">
            <select
              name=""
              id=""
              className="rounded-md border-2 border-gray-400 px-4"
            >
              <option value="" className="text-gray-400">
                Select Warehouse:
              </option>
            </select>
            <button
              className="rounded-md flex items-center border-2 border-gray-400 px-4 text-gray-600 cursor-pointer hover:bg-lime-500 hover:text-white transition-all duration-100"
              onClick={() => dispatch(setIsWarehouseModalOpen(true))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Warehouse
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Total Products
                  </p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Tech Stack Quantity
                  </p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Utilization
                  </p>
                  <p className="text-3xl font-bold text-gray-900">0%</p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Active Staff
                  </p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-8">
            <div className="flex flex-col gap-y-8 w-1/2">
              <div className="bg-white rounded-xl shadow-md h-[40vh] transition-shadow flex flex-col p-4">
                <h1 className="font-semibold text-xl">
                  Manila Central Warehouse
                </h1>
                <div className="flex justify-between mt-6">
                  <p className="text-lg">Warehouse ID</p>
                  <p className="text-lg">WRE-001</p>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-lg">Address</p>
                  <p className="text-lg">123 Warehouse St. Quezon City, NCR</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md h-[40vh] transition-shadow flex flex-col p-4">
                <p className="font-semibold text-xl">Inventory Summary</p>
                <div className="flex justify-between mt-6">
                  <p className="text-lg">Total Stock Quantity</p>
                  <p className="text-lg">0</p>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-lg">Total Stock Value</p>
                  <p className="text-lg">0</p>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-lg">Low Stock Items</p>
                  <p className="text-lg">0</p>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-lg">No Stock Items</p>
                  <p className="text-lg">0</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md w-1/2 h-[84vh] transition-shadow flex p-4">
              <p className="font-semibold text-xl">Stock Movement</p>
            </div>
          </div>
        </div>
      </main>
      {isWarehouseModalOpen && (
        <Suspense
          fallback={<div className="inset-0 absolute z-10">Loading...</div>}
        >
          <Warehouse />
        </Suspense>
      )}
    </div>
  );
};

export default Warehouses;
