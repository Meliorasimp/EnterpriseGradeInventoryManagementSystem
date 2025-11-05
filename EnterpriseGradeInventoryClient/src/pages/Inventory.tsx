import Navbar from "../components/Navbar";
const Inventory = () => {
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
                    Total Asset Value
                  </p>
                  <p className="text-3xl font-bold text-gray-900">$1.2M</p>
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
                  <p className="text-3xl font-bold text-gray-900">120</p>
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
                  <p className="text-3xl font-bold text-gray-900">21</p>
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
                  <p className="text-3xl font-bold text-gray-900">$1.2M</p>
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
                />
              </div>
              <div className="flex flex-row space-x-4">
                <select
                  name=""
                  id=""
                  className="border border-gray-300 rounded-sm p-1 text-gray-600"
                >
                  <option value="">Filter by Category</option>
                  <option value="">Electronics</option>
                  <option value="">Furniture</option>
                  <option value="">Clothing</option>
                  <option value="">Toys</option>
                </select>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 rounded-sm p-1 text-gray-600"
                >
                  <option value="">Sort by</option>
                  <option value="">Name: A to Z</option>
                  <option value="">Name: Z to A</option>
                  <option value="">Stock: Low to High</option>
                  <option value="">Stock: High to Low</option>
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
                <button className="border flex items-center p-2 border-gray-300 text-gray-600 cursor-pointer rounded-sm">
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
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 rounded-2xl divide-y divide-gray-200">
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      SKU-001
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Product A
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Electronics
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      Taytay, Rizal Starstone Street
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      19000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      3000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      By Kilograms
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      20
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      38000
                    </td>
                    <td className="text-left text-gray-500 pb-2 text-sm font-medium px-6 min-w-[200px]">
                      October 26, 2023
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;
