import axios from "axios";

export default {
  // Create Sign up credentials
  createAccount: function(signup) {
    return axios.post('/api/signup', signup);
  },

  verifyAccount: function(login) {
    return axios.post('/api/login', login);
  },
  getSavedTips: function(){
    return axios.get('/api/hairTips')
  }
};
