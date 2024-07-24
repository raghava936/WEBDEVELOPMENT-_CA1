import axios from "axios";

const baseURL = "https://webdevelopment-ca1.onrender.com/";

export default axios.create({ baseURL: baseURL });
