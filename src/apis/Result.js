import axios from "axios";

// Have this when u want to run it locally
const url = "http://130.113.68.57:5001";

export const getResult = async (props) => {
    const { id } = props;
    try {
        const response = await axios.get(`${url}/getResult`, {
            params: {
                id: id,
            },
        });
        return response.data
    } catch (error) {
        console.log(error);
        return;
    }
};
