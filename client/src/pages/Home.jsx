import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(false);

  // Removed console.log for production

  const getTutorials = async () => {
    try {
      setLoading(true);
      const apiUrl = "http://localhost:8000/api/tutorials";
      const { data } = await axios.get(apiUrl);
      setTutorials(data.result.rows);
    } catch (error) {
      console.error("Error fetching tutorials:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} loading={loading} />
      <TutorialList
        tutorials={tutorials}
        getTutorials={getTutorials}
        loading={loading}
      />
    </>
  );
};

export default Home;
