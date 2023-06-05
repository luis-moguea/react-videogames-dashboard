import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8dc4561c17ee475c80cd784cbb4cd486"
    }
})