import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3001/isms",
});

export default {
  getLoginStatus: async () => {
    try {
      const res = await axios.get("/api/login/status");
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  postUserLogin: async (user) => {
    try {
      const res = await auth.post("/login", {
        vals: [user.loginUsername, user.loginPassword],
      });

      return res;
    } catch (err) {}
  },
  getLoggedOut: async () => {
    try {
      const res = await auth.get("/user/logout");
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  postNewUser: async (newUser) => {
    // Example POST: { "vals": ["test_user", "111111", 1] }
    // console.log("postNewUser");
    // console.log(newUser.username + "in post new user");
    try {
      const { firstname, lastname, email, tel, username, password } = newUser;
      const res = await auth.post("/register", {
        vals: [firstname, lastname, email, tel, username, password],
      });
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  getAllUsers: async () => {
    try {
      console.log("test!!!!!!!!!!!!");
      const res = await auth.get("/user");
      // console.log(res)
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  deleteUserById: async (id) => {
    try {
      const res = await auth.delete(`/user/${id}`);
      // console.log(res)
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
};
