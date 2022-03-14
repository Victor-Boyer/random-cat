import { useEffect, useState } from "react";
import { getMessageCat } from "../../api/all.cat";
import { DefaultBtn } from "../atoms/Button";
import { DefaultInput } from "../atoms/Input";
import { Item } from "../molecules/Item";
import { NavBar } from "../organisms/NavBar";

export const MakeACat = () => {
  const [favPage, setFavPage] = useState(true);
  const [cat, setCat] = useState(null);
  const [message, setMessage] = useState("Example");

  const generateCat = async (e) => {
    e.preventDefault();
    setCat(await getMessageCat(message));
  };

  const fetchFirstCat = async () => {
    setCat(await getMessageCat("My message!"));
  };

  useEffect(() => {
    fetchFirstCat();
  }, []);
  return (
    <div className="dark:bg-dark-smooth">
      <NavBar setter={setFavPage} favPage={favPage} />
      <div className="h-screen bg-white dark:bg-dark-smooth py-20 px-3">
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 items-center justify-around w-screen max-w-[400px] mt-12">
            <DefaultInput
              placeholder="Enter your message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <DefaultBtn onClick={(e) => generateCat(e)}>Generate</DefaultBtn>
            <Item cat={{ id: cat && cat.id, url: `/${cat && cat.url}` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
