import Navbar from "../components/Navbar";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsInventoryModalOpen } from "../store/InteractionSlice";
import { type RootState } from "../store";
import { useQuery } from "@apollo/client/react";
import GetAllInventoryItems from "../gql/query/inventoryQuery/inventoryQuery.gql";
import {
  type FetchInventoryResponse,
  type SearchCategoryInventoryResponse,
  type SearchInventoryResponse,
} from "../types/inventory";
import { FormatDate } from "../Utils";
import Search from "../gql/query/inventoryQuery/searchInventoryQuery.gql";
import SearchCategory from "../gql/query/inventoryQuery/searchByCategoryQuery.gql";
import { setDataSearch, setCategorySearch } from "../store/InventorySlice";
import useDebounce from "../hooks/useDebounce";

const Inventory = () => {
  const dispatch = useDispatch();
  //Fetch all inventory items
  const {
    data: inventoryData,
    loading: inventoryLoading,
    error: inventoryError,
  } = useQuery<FetchInventoryResponse>(GetAllInventoryItems);

  //Fetch Result from Searching Inventory
  const dataSearch = useSelector((state: RootState) => state.search.dataSearch);
  const categorySearch = useSelector(
    (state: RootState) => state.search.categorySearch
  );

  // Debounce both search terms to avoid excessive API calls
  const debouncedSearchTerm = useDebounce(dataSearch, 400);
  const debouncedCategorySearch = useDebounce(categorySearch, 300);

  // Inventory Modal State Selector
  const isInventoryModalOpen = useSelector(
    (state: RootState) => state.interaction.isInventoryModalOpen
  );

  //Fetch Search Result from Database based on Search Term
  const { data: searchData } = useQuery<SearchInventoryResponse>(Search, {
    variables: { searchTerm: debouncedSearchTerm },
    skip: !debouncedSearchTerm || debouncedSearchTerm.trim() === "", // Only run when there's a search term
  });

  //Fetch Search Result from Database based on Category
  const { data: categoryData } = useQuery<SearchCategoryInventoryResponse>(
    SearchCategory,
    {
      variables: { category: debouncedCategorySearch },
      skip: !debouncedCategorySearch || debouncedCategorySearch.trim() === "", // Only run when there's a category selected
    }
  );

  //Function to Manipulate Inventory Modal State
  const handleAddInventoryClick = () => {
    dispatch(setIsInventoryModalOpen(true));
  };

  // Handle search input change
  const handleDataSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Dispatch action to update search term in Redux store
    dispatch(setDataSearch(e.target.value));
  };

  //Code Splitting for Inventory Modal to improve performance
  const AddInventoryModal = lazy(
    () => import("../components/AddInventoryModal")
  );

  // Format total inventory value in millions
  const formatted =
    (inventoryData?.totalInventoryValue
      ? inventoryData.totalInventoryValue / 1_000_000
      : 0
    ).toFixed(2) + "M";

  // Fetch all warehouse names for the filter dropdown

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="min-h-full p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Inventory</h1>
            <p className="text-gray-600 mt-2">
              This is where you can manage your products and stock levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Total Inventory Value
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    &#8369;{formatted}
                  </p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-lime-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    In Stock Items
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {inventoryData?.inStockItems}
                  </p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-lime-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Low Stock Items
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {inventoryData?.lowStockItems}
                  </p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-red-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    No Stock Items
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {inventoryData?.outOfStockItems}
                  </p>
                </div>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-red-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
            <div className="h-1/2 flex flex-row space-x-4 justify-between">
              <div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm p-1"
                  placeholder="Search..."
                  value={dataSearch}
                  onChange={handleDataSearch}
                />
              </div>
              <div className="flex flex-row space-x-4">
                <select
                  name=""
                  id=""
                  className="border border-gray-300 rounded-sm p-1 text-gray-600"
                  value={categorySearch}
                  onChange={(e) => dispatch(setCategorySearch(e.target.value))}
                >
                  <option value="">Filter by Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="clothing">Clothing</option>
                  <option value="toys">Toys</option>
                  <option value="books">Books</option>
                </select>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 rounded-sm p-1 text-gray-600"
                >
                  <option value="">Filter by Warehouse:</option>
                  <option value="">Pluto</option>
                  <option value="">Mars</option>
                  <option value="">Earth</option>
                  <option value="">Venus</option>
                </select>
                <button
                  className="border flex items-center p-2 border-gray-300 text-gray-600 cursor-pointer rounded-sm"
                  onClick={handleAddInventoryClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Inventory
                </button>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="mt-4 min-w-full border-collapse flex flex-col gap-y-2 h-[80vh]">
                <thead>
                  <tr>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Item SKU
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Product Name
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Category
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Warehouse Location
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Rack Location
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Quantity in Stock
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Reorder Level
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Unit of Measure
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Cost per Unit
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Total Value
                    </th>
                    <th className="text-left text-gray-700 pb-2 text-sm px-6 min-w-[200px]">
                      Last Restocked
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryLoading && (
                    <tr>
                      <td colSpan={9} className="text-center py-8">
                        <h1 className="text-lg text-gray-600">Loading...</h1>
                      </td>
                    </tr>
                  )}
                  {inventoryError && (
                    <tr>
                      <td colSpan={9} className="text-center py-8">
                        <h1 className="text-lg text-red-600">
                          Error loading inventory data.
                        </h1>
                      </td>
                    </tr>
                  )}
                  {/* Show filtered results based on search and category filters */}
                  {(() => {
                    // Priority: 1. Search results, 2. Category results, 3. All inventory
                    let displayItems = [];

                    if (debouncedSearchTerm && searchData?.itemBySearchTerm) {
                      displayItems = searchData.itemBySearchTerm;
                    } else if (
                      debouncedCategorySearch &&
                      categoryData?.itemByCategory
                    ) {
                      displayItems = categoryData.itemByCategory;
                    } else {
                      displayItems = inventoryData?.inventoryItems || [];
                    }
                    return displayItems.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200"
                      >
                        <td className="text-left text-gray-500 text-sm font-medium px-6 min-w-[200px]">
                          {item.itemSKU}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.productName}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.category}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.warehouseLocation}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.rackLocation}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px] ">
                          {item.quantityInStock}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.reorderLevel}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.unitOfMeasure}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.costPerUnit}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {item.totalValue}
                        </td>
                        <td className="text-left text-gray-500 text-sm py-2 font-medium px-6 min-w-[200px]">
                          {FormatDate(item.lastRestocked)}
                        </td>
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {isInventoryModalOpen && (
        <Suspense
          fallback={<div className="inset-0 absolute z-10">Loading...</div>}
        >
          <AddInventoryModal />
        </Suspense>
      )}
    </div>
  );
};

export default Inventory;
