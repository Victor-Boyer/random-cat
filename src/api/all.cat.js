import axios from "axios";

export const getAllCats = async () => {
  try {
    const cats = [];
    for (let i = 0; i < 15; i++) {
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

export const getMessageCat = async (message) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/cat/says/${message}?json=true`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
