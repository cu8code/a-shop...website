import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import SearchBar from "./searchBar";
import SideBar from "./sideBar";

export default function NavigationBar(props: {
  title: string;
}): JSX.Element {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  return (
    <nav className="sticky top-0 bg-white text-3xl lg:text-4xl flex flex-col p-1 md:p-2 gap-2">
      <div className="w-full flex justify-between">
        <button
          onClick={() =>
            sideBarVisible ? setSideBarVisible(false) : setSideBarVisible(true)
          }
          className="flex flex-row justify-start"
        >
          <GiHamburgerMenu />
        </button>
        <div className="flex flex-row justify-center">
          <h1>{props.title}</h1>
        </div>
        <div className="hidden md:block flex flex-row justify-center">
          <SearchBar />
        </div>
        <div className="flex flex-row p-1 gap-2 justify-end">
          <AiOutlineShoppingCart />
          <BiUser />
        </div>
      </div>

      <div className="block md:hidden flex flex-row w-full">
        <SearchBar />
      </div>

      <SideBar
        isVisible={sideBarVisible}
        setSideBarVisible={setSideBarVisible}
      />
    </nav>
  );
}
