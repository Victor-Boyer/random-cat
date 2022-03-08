import axios from "axios";

export const getFirstCat = async () => {
  try {
    const { data } = await axios.get(`https://some-random-api.ml/animal/cat`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
