import { useState } from "react";
import { LuPlus, LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/category/categoryThunk";

const AddListModal = ({ isOpen, toggle, catId }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.category);

  const [listTitle, setListTitle] = useState("");
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim()) {
      setItems([...items, item]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, idx) => idx !== index));
  };

  const handleAddList = () => {
    if (!listTitle.trim()) return;
    const listData = { listTitle, items };
    dispatch(addList({ listData, categoryId: catId })).finally(() => toggle());
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Add New List</h2>
        <button onClick={toggle} className="text-gray-400 hover:text-gray-600">
          <LuX className="h-5 w-5" />
        </button>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            List Title
          </label>
          <input
            type="text"
            placeholder="Enter list title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add Items
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Item name"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button
              type="button"
              onClick={addItem}
              className="px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <LuPlus className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="bg-gray-50 rounded-md p-2">
            {items.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-2">
                No items added yet
              </p>
            ) : (
              items.map((i, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-2 mb-2 bg-white border rounded"
                >
                  <span>{i}</span>
                  <button
                    onClick={() => removeItem(idx)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <LuX className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <button
          onClick={handleAddList}
          disabled={status === "adding lists"}
          className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {status === "adding lists" ? <Spinner size="sm" /> : "Create List"}
        </button>
      </form>
    </div>
  );
};

export default AddListModal;
