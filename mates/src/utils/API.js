import axios from "axios";
const baseUrl = "http://localhost:3001";

export default {

    // saveMessages: function(userMessages){
    //     return axios.get("/api/messages", userMessages);
    // },

    // getMessages: function(){
    //     return axios.get("/api/messages");
    // }
    saveMessages: function(userMessages) {
        return axios.post(`${baseUrl}/message/message`, userMessages);
      },
    getMessages: function() {
        return axios.get(`${baseUrl}/message/message`)
    }

};