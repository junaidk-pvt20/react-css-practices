import React, { useEffect, useState } from "react";
import styles from "./FetchMethod.module.scss";
import { Link } from "react-router-dom";
const FetchMethod = () => {
  const [addValue, setaddValue] = useState({
    id: "",
    name: "",
    email: "",
    gender: "",
    status: "active",
  });
  const [user, setUser] = useState([]);
  const [checkbtn, setCheckbtn] = useState("submit");
  const onChange = (e, key) =>
    setaddValue({
      ...addValue,
      [key]: e.target.value,
    });
  const getData = () => {
    fetch("https://gorest.co.in/public/v2/users?page=1&per_page=101", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const postData = () => {
    fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      body: JSON.stringify(addValue),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 18a3279201423034b60a718f43ea6592db5e934ef43e88e9ff8c3bfe40056a4c",
      },
    }).then(() => getData());
  };
  const deleteData = (id) => {
    if (window.confirm("Are you sure")) {
      fetch("https://gorest.co.in/public/v2/users/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer 18a3279201423034b60a718f43ea6592db5e934ef43e88e9ff8c3bfe40056a4c",
        },
      }).then(() => getData());
    } else {
      getData();
    }
  };
  const updateData = (id) => {
    fetch("https://gorest.co.in/public/v2/users/" + id, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer 18a3279201423034b60a718f43ea6592db5e934ef43e88e9ff8c3bfe40056a4c",
      },
      body: JSON.stringify(addValue),
    }).then(() => getData());
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if ("submit" === checkbtn) {
      setUser([...user, { addValue }]);

      postData();
    } else if ("update" === checkbtn) {
      updateData(addValue.id);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className={styles.fetchdiv}>
        <p> Add Data </p>

        <form onSubmit={formSubmit}>
          <label> Enter your name: </label>
          <input
            required
            type="text"
            value={addValue.name}
            onChange={(e) => onChange(e, "name")}
          />
          <label>Enter your Email: </label>
          <input
            required
            type="text"
            value={addValue.email}
            onChange={(e) => onChange(e, "email")}
          />
          <label>Select Your Gender </label>
          <input
            required
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => onChange(e, "gender")}
          />
          Male
          <input
            required
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => onChange(e, "gender")}
          />{" "}
          Female
          <button value={checkbtn}> {checkbtn}</button>
        </form>
      </div>

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
          {user.map((e) => {
            return (
              <tr key={e.id}>
                <td>
                  <Link to={"/user/" + e.id}>{e.id} </Link>
                </td>
                <td> {e.name} </td>
                <td> {e.email} </td>
                <td> {e.gender} </td>
                <td> {e.status} </td>
                <td>
                  <button
                    onClick={() => {
                      deleteData(e.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setCheckbtn("update");
                      //   updateData(e.id);

                      setaddValue({
                        id: e.id,
                        name: e.name,
                        email: e.email,
                        gender: e.gender,
                        status: "active",
                      });
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchMethod;
