import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ editData, getTutorials }) => {
  const [title, setTitle] = useState(editData.title);
  const [description, setDescription] = useState(editData.description);
  // Debug logs removed for production

  useEffect(() => {
    setTitle(editData.title);
    setDescription(editData.description);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorials({ title, description });
  };

  const editTutorials = async (tutorial) => {
    try {
      const apiUrl = "http://localhost:8000/api/tutorials";
      await axios.put(`${apiUrl}/${editData.id}/`, tutorial);
    } catch (error) {
      console.error("Error updating tutorial:", error);
    } finally {
      getTutorials();
    }
  };
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    id="title"
                    placeholder="Enter your title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    id="desc"
                    placeholder="Enter your Description"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success mb-4"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTutorial;
