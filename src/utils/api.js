
import axios from "axios";
const url = 'https://randomuser.me/api/?results=30';

//api call
export default {
    ApiSearch: function () {
        return axios.get(url)

    }
}