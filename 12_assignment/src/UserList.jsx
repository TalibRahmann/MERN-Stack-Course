import { useState, useEffect } from "react";
import axios from "axios";

export const UserList = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [idFromButton]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <div>
        <span>Name: </span>
        {user.name}
        <br />
        <span> Email: </span>
        {user.email}
      </div>
    </div>
  );
};
