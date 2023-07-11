import { useEffect, useState } from "react";
import { getAllCats } from "../../api/all.cat";
import { FavoritesList } from "../organisms/FavoritesList";
import { List } from "../organisms/List";
import { NavBar } from "../organisms/NavBar";
import { getFirstCat } from "../../api/first.cat";
import { DefaultCard } from "../atoms/Card";

export function HomePage() {
  const [cats, setCats] = useState([]);
  const [favPage, setFavPage] = useState(false);
  const [sideCat, setSideCat] = useState({});

  const fetchCats = async () => {
    setCats(await getAllCats());
  };

  const fetchSideCat = async () => {
    setSideCat(await getFirstCat());
    const it = setInterval(async () => {
      setSideCat(await getFirstCat());
    }, 12000);
    return it;
  };

  const addCats = async () => {
    const newCats = await getAllCats();
    setCats([...cats, ...newCats]);
    return true;
  };

  useEffect(() => {
    fetchCats();
    const it = fetchSideCat();
    return () => {
      clearInterval(it);
    };
  }, []);

  return (
    <div className="dark:bg-dark-smooth">
      {/* Right side bar */}
      <div className="relative hidden 2xl:block">
        <DefaultCard className="absolute top-12 right-12 w-[500px] py-2 px-3">
          <h2 className="font-bold">Cat fact : </h2>
          <p className="text-blue-navy dark:text-grey">{sideCat?.fact}</p>
        </DefaultCard>
      </div>

      <NavBar location={"HOME"} />
      <div className="md:flex justify-center">
        <div className="flex flex-col w-screen justify-around">
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
