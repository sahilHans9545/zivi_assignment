import axios from "axios";

export const fetchProducts = async (options) => {
  try {
    const response = await axios.request(options);
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
