import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-hidden bg-gray-50">
        <div className="h-full p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          {/* Dashboard content goes here - this area won't scroll */}
          <div className="h-full bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600">
              Welcome to your Inventory Management Dashboard!
            </p>
            {/* Add your dashboard widgets/content here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
