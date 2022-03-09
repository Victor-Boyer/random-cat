import { useEffect, useState } from "react";
import { getAllCats } from "../../api/all.cat";
import { FavoritesList } from "../organisms/FavoritesList";
import { List } from "../organisms/List";
import { NavBar } from "../organisms/NavBar";

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
    <div className="dark:bg-dark-smooth">
      <NavBar setter={setFavPage} favPage={favPage} location={"HOME"} />
      <div className="md:flex md:justify-center">
        <div className="flex flex-col w-screen justify-around max-w-[600px]">
          {favPage ? (
            <FavoritesList />
          ) : (
            <List items={cats} setter={setFavPage} addCats={addCats} />
          )}
        </div>
      </div>
    </div>
  );
}
