import "../styles/index.css";
import Landingpagenavbar from "../components/Landingpagenavbar";
import RegisterModal from "../components/RegisterModal";
import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import LoginModal from "../components/LoginModal";
const Landingpage = () => {
  const dispatch = useDispatch();
  const registerState = useSelector(
    (state: RootState) => state.interaction.isRegisterModalOpen
  );
  const loginState = useSelector(
    (state: RootState) => state.interaction.isLoginModalOpen
  );

  const handleGetStartedClick = () => {
    dispatch(setIsRegisterModalOpen(true));
  };

  return (
    <div className="min-h-screen">
      <Landingpagenavbar />
      <section className="h-[80vh] w-9/11 flex mt-10 justify-center mx-auto">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className=" text-4xl font-semibold ">Welcome to Quantify</h1>
          <h2 className="text-xl text-gray-400 mt-4">
            Your one-stop solution for an Enterprise-Grade inventory management
          </h2>
          <button
            className="mt-6 w-1/2 rounded-2xl bg-lime-500 text-white py-2 px-4 cursor-pointer hover:bg-lime-600 transition duration-300"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
        <div className="w-1/2 h-full"></div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-lime-500">Quantify</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive
              inventory management platform designed for enterprises that demand
              excellence, scalability, and precision.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600">
                Get instant insights into your inventory levels, sales trends,
                and demand forecasting with our advanced analytics dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-grade encryption, role-based access control, and
                comprehensive audit trails keep your sensitive data protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Built on modern technology stack for blazing-fast performance,
                even with millions of inventory items and complex operations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly connect with your existing ERP, CRM, and accounting
                systems through our robust API and pre-built connectors.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multi-Location Support
              </h3>
              <p className="text-gray-600">
                Manage inventory across multiple warehouses, stores, and
                distribution centers with centralized control and local
                autonomy.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Get round-the-clock support from our expert team with dedicated
                account managers and priority technical assistance.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg text-gray-600">
                Join thousands of businesses that have transformed their
                operations with Quantify
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">
                  50M+
                </div>
                <div className="text-gray-600">Items Tracked Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">40%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-r from-lime-500 to-lime-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Inventory Management?
            </h3>
            <p className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of
              enterprise-grade inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStartedClick}
                className="bg-white text-lime-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Start Free Trial
              </button>
              <button className="text-white font-semibold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-lime-600 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {registerState && <RegisterModal />}
      {loginState && <LoginModal />}
    </div>
  );
};

export default Landingpage;
