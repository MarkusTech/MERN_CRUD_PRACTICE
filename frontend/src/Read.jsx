import React, { useState, useEffect } from "react";
import axios from "axios";
import YourNavbar from "./Navbar";
import { useParams, Link } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/read/${id}`)
      .then((res) => {
        setResult(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = result[0]; // to render data this is my own way of solving the algorithm

  return (
    <div>
      <YourNavbar />
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2 className="text-center mx-auto">Users Details</h2>
          {data && data.id ? ( // Check if user and user.id are truthy
            <>
              <h2>ID: {data.id}</h2>
              <h2>Name: {data.name}</h2>
              <h2>Email: {data.email}</h2>
              <h2>Password: {data.password}</h2>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
          <Link to="/" className="btn btn-info">
            Back
          </Link>
          {/* <Link to={`/edit/${data.id}`} className="btn btn-sm btn-primary">
            Edit
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Read;
