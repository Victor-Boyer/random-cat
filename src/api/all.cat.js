import axios from "axios";

export const getAllCats = async () => {
  try {
    const cats = [];
    for (let i = 0; i < 5; i++) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/cat?json=true&type=sq`
      );
      cats.push(data);
    }
    return cats;
  } catch (error) {
    console.error(error);
  }
};
