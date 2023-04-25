import { DefaultCard } from "../atoms/Card";
import { DefaultBtn } from "../atoms/Button";
import { Item } from "../molecules/Item";
import { useState } from "react";

export const List = ({ items, addCats }) => {
  const [loading, setLoading] = useState(false);

  const handleScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - Math.round(e.target.scrollTop) ===
      e.target.clientHeight;
    if (bottom && !loading) {
      setLoading(true);
      const res = await addCats();
      if (res) setLoading(false);
      /*       const timeout = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timeout); */
    }
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center">
        <ul
          className="flex flex-col items-center w-full h-full overflow-scroll gap-0 md:px-[30px] overflow-x-hidden pb-5"
          onScroll={(e) => {
            handleScroll(e);
          }}
        >
          {items?.length ? (
            items.map((cat) => <Item key={cat._id + Date.now()} cat={cat} />)
          ) : (
            <Item key={"loading"} cat={{}} />
          )}
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
