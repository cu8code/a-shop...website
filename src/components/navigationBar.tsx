import { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiCart, BiUserCircle } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

// smallScreen FIRST APPROCH

export type screenType = "smallScreen" | "bigScreen";

function SearchBar() {
  return (
    <div className="flex flex-row">
      <input className="basis-11/12 text-2xl outline outline-1"></input>
      <p className="basis-1 text-4xl flex flex-row w-full justify-end"><AiOutlineSearch /></p>
    </div>
  );
}

// we will be using screenType for returning diffrent type of navigation Bar
export default function NavigationBar(): JSX.Element {
  const [screenType, setScreenType] = useState<screenType>("smallScreen");
  function setSize() {
    if (innerWidth > 640) {
      setScreenType("bigScreen")
    } else {
      setScreenType("smallScreen")
    }
  }
  useEffect(setSize, []);
  if (screenType === "bigScreen") {
    return <div className="flex flex-row w-screen gap-3">
      <p className="basis-1 text-4xl">BABAG.com</p>
      <div className="basis-9/12 flex flex-col w-full"><SearchBar /></div>
      <div className="basis-1 text-4xl flex flex-row w-full gap-2  justify-end">
        <BiCart />
        <BiUserCircle />
      </div>
    </div>;
  } else {
    return (
      <div className="flex flex-col w-screen">
        <div className="flex flex-row gap-2 w-full">
          <p className="text-4xl flex flex-row "><GiHamburgerMenu /></p>
          <h1 className="text-4xl">BABAG.com</h1>
          <div className="text-4xl flex flex-row w-full gap-2  justify-end">
            <p><BiUserCircle /></p>
            <p><AiOutlineShoppingCart /></p>
          </div>
        </div>
        <SearchBar />
      </div>
    );
  }
}
