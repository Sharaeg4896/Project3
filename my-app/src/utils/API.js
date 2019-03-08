import axios from "axios";

export default {
  // Gets all books
  createAccount: function() {
    return axios.get('/api/signup');
  }
};
