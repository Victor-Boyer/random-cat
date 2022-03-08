import axios from "axios";

export const getFirstCat = async () => {
  try {
    const cat = await axios.get(
      `${process.env.REACT_APP_URL}/cat?json=true&type=sq`
    );
    return cat.data;
  } catch (error) {
    console.error(error);
  }
};
