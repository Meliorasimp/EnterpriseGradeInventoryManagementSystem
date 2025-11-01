import "../styles/index.css";
import Landingpagenavbar from "../components/Landingpagenavbar";
import RegisterModal from "../components/RegisterModal";
import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
const Landingpage = () => {
  const dispatch = useDispatch();
  const registerState = useSelector(
    (state: RootState) => state.interaction.isRegisterModalOpen
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
      {registerState && <RegisterModal />}
    </div>
  );
};

export default Landingpage;
