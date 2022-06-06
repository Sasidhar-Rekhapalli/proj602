const dbObject = require("../connect");
const bcrypt = require("bcrypt");

const User = {
  selectAll: (cb) => {
    const queryString = `SELECT u.user_Id, u.user_name
    FROM user AS u`;
    dbObject.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  getUserByUsernameWithPassword: (username, done) => {
    const queryString = `SELECT u.user_Id, u.user_name,u.password 
    FROM user AS u 
    WHERE user_name=? 
    LIMIT 1;`;
    dbObject.execute(queryString, [username], (err, user) => {
      if (err) {
        return done(err, user);
      }
      return done(null, user[0]);
    });
  },
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        dbObject.query(
          "SELECT * from user where user_id = ?",
          id,
          function (errors, rows) {
            if (error) reject(error);
            let user = rows[0];
            resolve(user);
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },
  selectOneById: (id, cb) => {
    const queryString = `SELECT u.user_Id, u.user_name 
    FROM user AS u 
    WHERE user_Id=? 
    LIMIT 1;`;
    dbObject.execute(queryString, [id], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectOneByUsername: (username) => {
    return new Promise((resolve, reject) => {
      try {
        dbObject.query(
          "SELECT * from user where user_name=?",
          username,
          function (error, rows) {
            if (error) {
              reject(error);
            }
            let user = rows[0];
            resolve(user);
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  },

  comparePasswordUser: (user, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        let isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) resolve(true);
        reject("The password that you've entered is incorrect");
      } catch (err) {
        reject(err);
      }
    });
  },

  deleteOne: (id, cb) => {
    const queryString = `DELETE FROM user 
  WHERE user_Id=?;`;
    dbObject.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (vals, cb) => {
    const queryString = `INSERT INTO user 
  (first_name,last_name,email,tel,user_name, password)
   VALUES (?,?,?,?,?,?)`;
    dbObject.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (vals, id, cb) => {
    vals.push(id);
    const queryString =
      "UPDATE user SET user_name=?, password=? WHERE user_Id=?;";
    dbObject.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = User;
