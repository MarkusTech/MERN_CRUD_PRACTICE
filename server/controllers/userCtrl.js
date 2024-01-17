import db from "../database/db.js";

const getUsers = async (req, res) => {
  const query = "select * from users";
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    return res.send(data);
  });
};

const addUser = async (req, res) => {
  const { id, name, email, password } = req.body;
  const query = "INSERT INTO users SET ?";
  db.query(
    query,
    { id: id, name: name, email: email, password: password },
    (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).json({ message: "User Successfully Added", data });
      }
    }
  );
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const slq = "Select * from users where id = ?";
  db.query(slq, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    return res.status(200).json({ message: "User Found!", result });
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM USERS WHERE ID = ?";
  db.query(sql, id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    return res.status(200).json({
      message: "User Deleted Successfully",
      data,
    });
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const sql = "UPDATE users SET name = ?, email = ?, password =? Where id = ?";
  db.query(sql, [name, email, password, id], (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.status(200).json({ message: "User Updated Successfully", data });
  });
};

export { getUsers, addUser, getSingleUser, deleteUser, updateUser };
