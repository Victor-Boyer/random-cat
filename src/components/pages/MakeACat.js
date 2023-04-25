import { useEffect, useState } from "react";
import { getMessageCat } from "../../api/all.cat";
import { DefaultBtn } from "../atoms/Button";
import { DefaultInput } from "../atoms/Input";
import { Item } from "../molecules/Item";
import { NavBar } from "../organisms/NavBar";
import { FreshIc } from "../../helpers/fav.icons";

export const MakeACat = () => {
  const [favPage, setFavPage] = useState(true);
  const [cat, setCat] = useState(null);
  const [message, setMessage] = useState("Example");
  const [loading, setLoading] = useState(false);

  const generateCat = async (e) => {
    e.preventDefault();
    setLoading(true);
    const string = message.replace(/(\?)/g, function (match) {
      if (match === "?") {
        return "%3F";
      }
    });

    setCat(await getMessageCat(string));
    setLoading(false);
  };

  const fetchFirstCat = async () => {
    setCat(await getMessageCat("My message!"));
  };

  useEffect(() => {
    fetchFirstCat();
  }, []);

  return (
    <div className="dark:bg-dark-smooth">
      <NavBar />
      <div className="h-screen bg-white dark:bg-dark-smooth md:py-20 md:px-3">
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 items-center justify-around w-full max-w-[500px] mt-12">
            <span className="w-full flex justify-center gap-4 px-3 md:px-0">
              <DefaultInput
                placeholder="Enter your message..."
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <DefaultBtn
                onClick={(e) => generateCat(e)}
                className={`flex gap-2 items-center ${
                  loading && "animate-pulse cursor-not-allowed"
                }`}
                disabled={loading}
              >
                <FreshIc className={`w-6 h-6 ${loading && "animate-spin"} `} />
                <span className="hidden lg:block transition-all">Generate</span>
              </DefaultBtn>
            </span>
            <ul className="max-h-[300px]">
              <Item cat={{ id: cat && cat._id, url: `${cat && cat.url}` }} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
