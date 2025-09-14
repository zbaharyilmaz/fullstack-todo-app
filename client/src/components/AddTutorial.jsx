import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials, loading }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission handled
    postTutorial({ title, description });
    setTitle("");
    setDescription("");
  };

  const postTutorial = async (newTutorial) => {
    try {
      const apiUrl = "http://localhost:8000/api/tutorials";
      await axios.post(apiUrl, newTutorial);
    } catch (error) {
      console.error("Error creating tutorial:", error);
    } finally {
      getTutorials();
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-5 text-success m-5">My Tasks</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control w-50 m-auto"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
            placeholder="Enter your task"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control w-50 m-auto"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="desc"
            placeholder="Enter your Description"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success m-4"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Adding...
            </>
          ) : (
            "Add"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
