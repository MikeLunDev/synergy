import axios from "axios";

export default axios.create({
    baseURL: "/api/v1",
    headers: {
        common: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }, 
});
