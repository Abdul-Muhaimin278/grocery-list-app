/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormGroup,
  Label,
  Spinner,
} from "reactstrap";
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/category/categoryThunk";

const AddNewListModal = ({ isOpen, toggle, catId }) => {
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
    const listData = { listTitle, items };
    dispatch(addList({ listData, categoryId: catId })).finally(() => toggle());
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle} className="border-0">
        Add New List
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="listTitle">List Title</Label>
          <Input
            type="text"
            id="listTitle"
            placeholder="Enter list title"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
        </FormGroup>

        <Label for="listTitle">Add Items</Label>
        <FormGroup className="d-flex align-items-center">
          <Input
            type="text"
            id="add items"
            placeholder="Item name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <Button color="success" className="ms-2" onClick={addItem}>
            <LuPlus size={20} />
          </Button>
        </FormGroup>

        <div className="bg-light p-3 rounded">
          {items.length === 0 ? (
            <p className="text-center text-muted">No items added yet</p>
          ) : (
            items.map((i, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-between align-items-center p-2 mb-2 bg-white border rounded"
              >
                <span>{i}</span>
                <Button close onClick={() => removeItem(idx)}></Button>
              </div>
            ))
          )}
        </div>
      </ModalBody>

      <ModalFooter className="border-0">
        <Button
          color="success"
          block
          onClick={handleAddList}
          disabled={status === "adding lists"}
        >
          {status === "adding lists" ? <Spinner size="sm" /> : "Create List"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewListModal;
