import { LuPlus, LuTrash } from "react-icons/lu";
import {
  Container,
  Card,
  CardBody,
  ListGroupItem,
  List,
  Spinner,
  Button,
} from "reactstrap";
import { CheckboxItem } from "../../components/CheckBoxItems";
import AddNewListModal from "./AddNewListModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLists, removeList } from "../../store/category/categoryThunk";

const CategoryLists = () => {
  const dispatch = useDispatch();
  const { lists, status } = useSelector((state) => state.category);
  const { categoryId } = useParams();

  const [modal, setModal] = useState(false);
  const [listDel, setListDel] = useState(null);

  const handleRemoveList = (listId) => {
    console.log(listId);
    setListDel(listId);
    dispatch(removeList({ categoryId, listId }))
      .unwrap()
      .finally(() => setListDel(null));
  };

  useEffect(() => {
    dispatch(fetchLists(categoryId));
  }, [categoryId, dispatch]);

  return (
    <section className="bg-body-tertiary mx-2 d-flex flex-column flex-grow-1 overflow-auto">
      {status === "fetching lists" ? (
        <div className="my-5 d-flex align-items-center justify-content-center flex-grow-1">
          <Spinner color="success" />
        </div>
      ) : (
        <Container fluid className="p-4 flex-grow-1 d-flex flex-column">
          <button
            className="mb-3 btn text-white d-flex justify-content-center align-items-center"
            style={{ width: "160px", backgroundColor: "#047857" }}
            onClick={() => setModal(true)}
          >
            <LuPlus className="me-2" />
            Add List
          </button>
          <div className="overflow-auto flex-grow-1">
            {lists?.map(({ listId, listTitle, items }) => (
              <Card key={listId} className="my-4">
                <CardBody>
                  <div className="border-0 d-flex justify-content-between">
                    <h5>{listTitle}</h5>
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
                  {items?.map((item, index) => (
                    <List key={index}>
                      <ListGroupItem tag="label" className="py-2">
                        <CheckboxItem
                          label={item}
                          id={`${listTitle}-${item}-${index}`}
                        />
                      </ListGroupItem>
                    </List>
                  ))}
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="p-4">
            <AddNewListModal
              catId={categoryId}
              isOpen={modal}
              toggle={() => setModal(!modal)}
            />
          </div>
        </Container>
      )}
    </section>
  );
};

export default CategoryLists;
