import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

export const Dashboard = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(null);
  const [idFromButton, setIdFromButton] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIdFromButton(id);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${idFromButton}`,
      );
      console.log(res.data);
      setPost(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (idFromButton !== null) {
      fetchData();
    }
  }, [idFromButton]);

  return (
    <div>
      <input
        id="textField"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button id="button" onClick={handleClick}>
        Fetch Data
      </button>

      {loading && <div>Loading...</div>}
      <div>
        <ul>
          <li className="list">
            <p>Name: {post.name}</p>
          </li>
          <li className="list">
            <p>Email: {post.email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
