import { LuPlus, LuTrash } from "react-icons/lu";
import AddListModal from "./AddListModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLists, removeList } from "../../store/category/categoryThunk";
import { CheckboxItem } from "../../components/CheckBoxItem";
import { Spinner } from "reactstrap";

const CategoryLists = () => {
  const dispatch = useDispatch();
  const { lists, status } = useSelector((state) => state.category);
  const { categoryId } = useParams();

  const [modal, setModal] = useState(false);
  const [listDel, setListDel] = useState(null);

  const handleRemoveList = (listId) => {
    // console.log(listId);
    setListDel(listId);
    dispatch(removeList({ categoryId, listId }))
      .unwrap()
      .finally(() => setListDel(null));
  };

  useEffect(() => {
    dispatch(fetchLists(categoryId));
  }, [categoryId, dispatch]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 w-full pt-16 mx-2 ">
        {status === "fetching lists" ? (
          <Spinner className="h-8 w-8" />
        ) : (
          <>
            <div className="flex w-full justify-start px-6 py-7">
              <button
                className="flex h-10 justify-center items-center border border-transparent   pl-4 pr-6 py-2 min-w-44 font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                onClick={() => setModal(true)}
              >
                <LuPlus className="h-4 w-4 mr-2" />
                <p>Add List</p>
              </button>
            </div>
            <div className="overflow-auto flex-grow-1">
              {lists?.map(({ listId, listTitle, items }) => (
                <div key={listId} className="mb-5">
                  <div className="flex-1 px-6 space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {listTitle}
                        </h3>
                        <button
                          className="focus:outline-none bg-red-50 p-2 rounded-lg hover:bg-red-100 hover:text-red-500 hover:border hover:border-red-300"
                          onClick={() => handleRemoveList(listId)}
                          disabled={status === "removing list"}
                        >
                          {status === "removing list" && listDel === listId ? (
                            <Spinner className="text-xs h-5 w-5 text-red-400" />
                          ) : (
                            <LuTrash className="h-5 w-5 text-xs text-red-400 cursor-pointer" />
                          )}
                        </button>
                      </div>
                      <div className="space-y-3">
                        {items?.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="flex items-center">
                              <CheckboxItem
                                label={item}
                                id={`${listTitle}-${item}-${index}`}
                              />
                              <span className="ml-3 text-gray-700">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <AddListModal
          catId={categoryId}
          isOpen={modal}
          toggle={() => setModal(!modal)}
        />
      </div>
    </>
  );
};

export default CategoryLists;
