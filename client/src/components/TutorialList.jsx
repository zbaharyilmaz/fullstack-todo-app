import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorials, loading }) => {
  const [editData, setEditData] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const deleteTutorials = async (id) => {
    try {
      setDeletingId(id);
      const apiUrl = "http://localhost:8000/api/tutorials";
      await axios.delete(`${apiUrl}/${id}/`);
    } catch (error) {
      console.error("Error deleting tutorial:", error);
    } finally {
      setDeletingId(null);
      getTutorials();
    }
  };
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Task</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="d-flex justify-content-center align-items-center py-4">
                  <span
                    className="spinner-border text-success me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading tasks...
                </div>
              </td>
            </tr>
          ) : tutorials?.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-muted py-4">
                No tasks found. Add your first task above!
              </td>
            </tr>
          ) : (
            tutorials?.map((item) => {
              const { id, title, description } = item;
              return (
                <tr key={id}>
                  <th>{id}</th>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td className="text-center text-nowrap">
                    <FaEdit
                      size={20}
                      type="button"
                      className="me-2 text-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => setEditData(item)}
                    />
                    <AiFillDelete
                      size={22}
                      type="button"
                      className={`text-success ${
                        deletingId === id ? "opacity-50" : ""
                      }`}
                      onClick={() => deleteTutorials(id)}
                      style={{
                        cursor: deletingId === id ? "not-allowed" : "pointer",
                        pointerEvents: deletingId === id ? "none" : "auto",
                      }}
                    />
                    {deletingId === id && (
                      <span
                        className="spinner-border spinner-border-sm text-success ms-1"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <EditTutorial editData={editData} getTutorials={getTutorials} />
    </div>
  );
};

export default TutorialList;
