import { useEffect, useState } from "react";
import { getAllCats } from "../../api/all.cat";
import { FavoritesList } from "../organisms/FavoritesList";
import { List } from "../organisms/List";

export function HomePage() {
  const [cats, setCats] = useState([]);
  const [favPage, setFavPage] = useState(false);

  const fetchCats = async () => {
    setCats(await getAllCats());
  };

  const addCats = async () => {
    const newCats = await getAllCats();
    setCats([...cats, ...newCats]);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="md:flex md:justify-center">
      <div className="flex w-screen justify-around max-w-[600px]">
        {favPage ? (
          <FavoritesList setter={setFavPage} />
        ) : (
          <List items={cats} setter={setFavPage} addCats={addCats} />
        )}
      </div>
    </div>
  );
}
