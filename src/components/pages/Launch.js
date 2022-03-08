import { useEffect, useState } from "react";
import { getFirstCat } from "../../api/first.cat";
import { DefaultBtn } from "../atoms/Button";

export function LaunchPage({ setter }) {
  const [cat, setCat] = useState(null);

  const fetchCat = async () => {
    setCat(await getFirstCat());
    setInterval(async () => {
      setCat(await getFirstCat());
    }, 3000);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-2/3 h-2/3 flex justify-center flex-col items-center gap-12">
        <h1 className="text-xl font-bold">Welcome to WatchCats 🐈</h1>
        <img
          src={`${process.env.REACT_APP_URL}/${cat && cat.url}`}
          className="rounded-lg"
        />
        <DefaultBtn
          className="animate-pulse"
          text="More cats"
          onClick={() => setter(true)}
        />
        <p className="italic text-sm text-grey-dark ">
          ♾ Scroll to the catfinity ♾
        </p>
      </div>
    </div>
  );
}
