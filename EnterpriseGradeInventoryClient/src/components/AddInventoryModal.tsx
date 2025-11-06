import { useDispatch } from "react-redux";
import { setIsInventoryModalOpen } from "../store/InteractionSlice";

const AddInventoryModal = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsInventoryModalOpen(false));
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-10 w-3/5 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        Hello
      </div>
    </div>
  );
};

export default AddInventoryModal;
