import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Button } from "react-bootstrap";
import YourNavbar from "./Navbar";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/v1/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <YourNavbar />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="bg-white rounded p-4">
          <h2>Users List</h2>
          <div className="d-flex justify-content-end">
            <Link to="/create" className="btn btn-success">
              Create +
            </Link>
          </div>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <Link
                        to={`/read/${user.id}`}
                        className="btn btn-sm btn-info"
                      >
                        Read
                      </Link>
                      <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => handleDelete(user.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Home;

// https://www.youtube.com/watch?v=y5NvOade3sk&t=373s
