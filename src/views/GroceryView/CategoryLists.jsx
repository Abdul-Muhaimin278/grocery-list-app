import { LuPlus, LuTrash, LuPencil } from "react-icons/lu";
import {
  Container,
  Card,
  CardBody,
  ListGroupItem,
  List,
  Spinner,
  Button,
} from "reactstrap";
import ListModal from "./ListModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLists, removeList } from "../../store/category/categoryThunk";
import { CheckboxItem } from "../../components/CheckBoxItems";

const CategoryLists = () => {
  const dispatch = useDispatch();
  const { lists, status } = useSelector((state) => state.category);
  const { categoryId } = useParams();

  const [modal, setModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [listDel, setListDel] = useState(null);

  const handleRemoveList = (listId) => {
    setListDel(listId);
    dispatch(removeList({ categoryId, listId }))
      .unwrap()
      .finally(() => setListDel(null));
  };

  const handleOpenModal = (list = null) => {
    setSelectedList(list);
    setModal(true);
  };

  useEffect(() => {
    dispatch(fetchLists(categoryId));
  }, [categoryId, dispatch]);

  return (
    <section className="mx-2">
      {status === "fetching lists" ? (
        <div className="my-5 d-flex align-items-center justify-content-center">
          <Spinner color="success" />
        </div>
      ) : (
        <Container fluid className="p-4">
          <button
            className="mb-3 btn text-white d-flex justify-content-center align-items-center"
            style={{ width: "160px", backgroundColor: "#047857" }}
            onClick={() => handleOpenModal()}
          >
            <LuPlus className="me-2" />
            Add List
          </button>
          <div>
            {lists?.map(({ listId, listTitle, items }) => (
              <Card key={listId} className="my-4">
                <CardBody>
                  <div className="border-0 d-flex justify-content-between">
                    <h5>{listTitle}</h5>
                    <div>
                      <Button
                        className="bg-light border-0 me-2"
                        onClick={() =>
                          handleOpenModal({ listId, listTitle, items })
                        }
                      >
                        <LuPencil color="blue" size="20px" />
                      </Button>
                      <Button
                        className="bg-light border-0"
                        onClick={() => handleRemoveList(listId)}
                        disabled={status === "removing list"}
                      >
                        {status === "removing list" && listDel === listId ? (
                          <Spinner color="danger" size="sm" />
                        ) : (
                          <LuTrash color="red" size="20px" />
                        )}
                      </Button>
                    </div>
                  </div>
                  {items?.map(({ itemId, name, checked }, index) => (
                    <List key={index}>
                      <ListGroupItem tag="label" className="py-2">
                        <CheckboxItem
                          key={index}
                          name={name}
                          id={itemId}
                          checked={checked}
                          categoryId={categoryId}
                          listId={listId}
                          s
                        />
                      </ListGroupItem>
                    </List>
                  ))}
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="p-4">
            <ListModal
              catId={categoryId}
              isOpen={modal}
              toggle={() => setModal(false)}
              existingList={selectedList}
            />
          </div>
        </Container>
      )}
    </section>
  );
};

export default CategoryLists;
