import { useEffect, useState } from "react";
import { getFirstCat } from "../../api/first.cat";
import { DefaultBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";

export function LaunchPage({ setter }) {
  const [cat, setCat] = useState({ image: null, fact: null });
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    setCat(await getFirstCat());
    setInterval(async () => {
      setCat(await getFirstCat());
    }, 8000);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-2/3 h-2/3 flex justify-center flex-col items-center gap-12">
        <h1 className="text-xl font-bold">Welcome to WatchCats 🐈</h1>
        <img
          src={cat.image}
          className={`rounded-lg max-h-[200px] ${loading ? "block" : "hidden"}`}
          width="200"
          onLoad={() => {
            setLoading(true);
            setFact(cat.fact);
          }}
        />
        <div
          className={`w-[200px] h-[200px] animate-pulse bg-grey-dark rounded-lg ${
            loading ? "hidden" : "block"
          }`}
        />

        <DefaultBtn text="More cats" onClick={() => setter(true)} />
        <DefaultCard>
          <h2 className="font-bold">Cat fact : </h2>
          <p className="text-blue-navy">{fact}</p>
        </DefaultCard>
        <p className="italic text-sm text-grey-dark ">
          ♾ Scroll to the catfinity ♾
        </p>
      </div>
    </div>
  );
}
