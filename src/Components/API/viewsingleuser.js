import { useState, useEffect } from "react";
// import FetchMethod from "./FetchMethod";
import { useParams, Link } from "react-router-dom";

const Viewsingleuser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const getData = () => {
    fetch("https://gorest.co.in/public/v2/users/" + id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <td> id</td>
            <td> Name </td>
            <td> Email </td>
            <td> Gender </td>
            <td> Status </td>
            <td> Changes</td>
          </tr>
        </thead>
        <tbody>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td> {user.name} </td>
            <td> {user.email} </td>
            <td> {user.gender} </td>
            <td> {user.status} </td>
            <td>
              <Link to="/FetchMethod/">
                <button value="Back"> Back </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Viewsingleuser;
