import { DefaultCard } from "../atoms/Card";
import { DefaultBtn } from "../atoms/Button";
import { Item } from "../molecules/Item";
import { useState } from "react";

export const List = ({ items, setter, addCats }) => {
  const [loading, setLoading] = useState(false);

  const handleScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - Math.round(e.target.scrollTop) ===
      e.target.clientHeight;
    if (bottom && !loading) {
      setLoading(true);
      addCats();
      setTimeout(() => setLoading(false), 3000);
    }
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex items-center justify-around py-5 w-full">
          <h1
            className="font-bold text-lg cursor-pointer"
            onClick={() => window.location.reload()}
          >
            WatchCats 😻
          </h1>
          <DefaultBtn text="My Favorites" onClick={() => setter(true)} />
        </div>
        <ul
          className="flex flex-col items-center w-full max-w-[500px] h-full overflow-scroll gap-8 px-[30px] overflow-x-hidden py-10"
          onScroll={(e) => {
            handleScroll(e);
          }}
        >
          {items &&
            items.map((cat) => <Item key={cat.id + Date.now()} cat={cat} />)}
        </ul>
        {loading && (
          <div className="animate-pulse text-grey-dark py-2 font-semibold">
            ⏳ Loading...
          </div>
        )}
      </div>
    </div>
  );
};
