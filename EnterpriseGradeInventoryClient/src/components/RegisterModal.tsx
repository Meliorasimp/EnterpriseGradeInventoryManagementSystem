import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../store/RegisterSlice";
import type { RootState } from "../store";
const RegisterModal = () => {
  const dispatch = useDispatch();
  const firstname = useSelector((state: RootState) => state.register.firstName);
  const lastname = useSelector((state: RootState) => state.register.lastName);
  const email = useSelector((state: RootState) => state.register.email);
  const password = useSelector((state: RootState) => state.register.password);
  const confirmPassword = useSelector(
    (state: RootState) => state.register.confirmPassword
  );

  const handleClose = () => {
    dispatch(setIsRegisterModalOpen(false));
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-6 w-3/5 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold border-b border-gray-300 pb-4 mb-4 w-full">
          <span className="text-lime-500">Organize smarter</span> - start your
          free account
        </h1>
        <form className="flex flex-col gap-y-4">
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col w-1/2">
              <h1 className="text-sm text-gray-700">First name*</h1>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={firstname}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <h1 className="text-sm text-gray-700">Last name*</h1>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={lastname}
                onChange={(e) => dispatch(setLastName(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm text-gray-700">Email*</h1>
            <input
              type="email"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col w-1/2">
              <h1 className="text-sm text-gray-700">Password*</h1>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <h1 className="text-sm text-gray-700">Confirm Password*</h1>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={confirmPassword}
                onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              />
            </div>
          </div>
          <button className="bg-lime-500 px-4 py-2 w-2/3 align mx-auto mt-4 rounded-full cursor-pointer hover:bg-lime-600">
            Register
          </button>
        </form>
        <section>
          <h1 className="text-xs text-gray-500 mt-4 text-center">
            By registering, you agree to our Terms of Service and Privacy
            Policy.
          </h1>
          <h1 className="text-xs text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <span className="text-lime-500 cursor-pointer">Login</span>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default RegisterModal;
