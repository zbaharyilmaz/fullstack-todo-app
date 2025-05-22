import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description);
    postTutorial({ title, description });
    setTitle("");
    setDescription("");
  };

  const postTutorial = async (newTutorial) => {
    try {
      await axios.post(process.env.REACT_APP_URL, newTutorial);
    } catch (error) {
      console.log(error);
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
        <button type="submit" className="btn btn-lg btn-success m-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
