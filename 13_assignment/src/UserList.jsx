import { useState, useEffect } from "react";
import axios from "axios";

export const UserList = () => {
  const [user, setUser] = useState({});
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
      setLoading(false);
      setUser(res.data);
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
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <button onClick={handleClick}>Fetch Data</button>

      {loading && <div>Loading...</div>}

      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone No.: {user.phone}</p>
        <p>Company Name: {user.company?.name}</p>
      </div>
    </div>
  );
};
