import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import AddEditForm from "./AddEditForm";

const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    const url =
      "https://bodhavajiapi.disctesting.in/api/masters/allMasters/employeeMasterList";
    await axios.get(url).then((res) => {
      setData(res.data.data);
    });
  };

  const closeModal = (isLoadData = false) => {
    setEditId(undefined);
    setShowModal(false);
    if (isLoadData) loadData();
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Emplyee Mangement System</h1>
      <div className="text-center mt-5"><button onClick={() => setShowModal(true)} className='btn btn-success'>
        Add New Employee
      </button></div>
      <Modal
        show={showModal}
        onHide={() => {
          return;
        }}
      >
        <AddEditForm onClose={closeModal} editId={editId} />
      </Modal>

      <h3 className='text-center mt-5'>
        <u>Employee List</u>
      </h3>
      <table className='table' border="1">
        <thead className='text-center'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>E-mail</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.emailId}</td>
              <td>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setEditId(item.id);
                  }}
                  className='btn btn-sm btn-outline-success'
                >
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
