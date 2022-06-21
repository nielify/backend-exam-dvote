const mysql = require('mysql');

//mysql database config
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "backend_crud",
});

//get all users
module.exports.allUsers_get = (req, res) => {
  const selectAllQuery = "SELECT * FROM users_table";

  db.query(selectAllQuery, (err, result) => {
    if (err) {
      res.send({ err: 'an error has occured' });
      throw err
    } else if (result.length === 0) {
      res.send({ message: 'there are currently no users in the table' });
    }
    else {
      res.send(result);
    }
  });
}

//add a user
module.exports.addNewUser_post = (req, res) => {
  const user = req.body;

  const insertQuery = `INSERT INTO users_Table (first_name, last_name, address, postcode, contact_phone_number, email, username, password) VALUES ("${user.firstName}", "${user.lastName}", "${user.address}", "${user.postcode}", "${user.contactNumber}", "${user.email}", "${user.username}", "${user.password}");`;

  db.query(insertQuery, (err, result) => {
    if (err) {
      res.send({ err: 'an error has occured' });
      throw err
    } else {
      console.log(result);
      res.send({ message: 'new user added' });
    }
  });
};

//edit user
module.exports.editUser_put = (req, res) => {  
  const id = req.params.id;
  const toUpdate = req.body;
  const updateQuery = `UPDATE users_table SET ? WHERE id=${id}`;

  db.query(updateQuery, toUpdate, (err, result) => {
    if (err) {
      res.send({ err: 'an error has occured' });
      throw err
    } else {
      console.log(result);
      res.send({ message: 'user updated' });
    }
  });
};

//delete single user 
module.exports.deleteSingleUser_delete = (req, res) => {
  const id = req.params.id;

  const selectQuery = `SELECT * FROM users_table WHERE id=${id};`;

  db.query(selectQuery, (err, result) => {
    if (err) {
      res.send({ err: 'an error has occured' });
      throw err
    } else if (result.length === 0) {
      res.send({ message: 'user does not exist' });
    } else {
      const deleteQuery = `DELETE FROM users_table WHERE id=${id};`;

      db.query(deleteQuery, (err, result) => {
        if (err) {
          res.send({ err: 'an error has occured' });
          throw err
        } else {
          res.send({ message: 'user deleted' });
        }
      });
    }
  });
};

//delete multiple users
module.exports.deleteMultipleUsers_delete = (req, res) => {
  const idArray = req.body;

  const deleteMultipleQuery = `DELETE FROM users_table WHERE id IN (${idArray})`;

  db.query(deleteMultipleQuery, (err, result) => {
    if (err) {
      res.send({ err: 'an error has occured' });
      throw err
    } else {
      res.send({ message: 'users deleted' });
    }
  });
};