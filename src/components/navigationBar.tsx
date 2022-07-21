import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiCart, BiUserCircle } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

import SearchBar from './searchBar';
import SideBar from './sideBar';

// smallScreen default FIRST APPROCH

export default function NavigationBar(props: {
  breakPoint: number;
}): JSX.Element {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    })
  }, []);
  if (screenWidth > props.breakPoint) {
    return <div className="flex flex-row w-screen gap-3">
      <p className="text-4xl flex flex-row "><GiHamburgerMenu /></p>
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
          <button className="text-4xl flex flex-row "><GiHamburgerMenu /></button>
          <h1 className="text-4xl">BABAG.com</h1>
          <div className="text-4xl flex flex-row w-full gap-2  justify-end">
            <p><BiUserCircle /></p>
            <p><AiOutlineShoppingCart /></p>
          </div>
        </div>
        <SearchBar />
        <SideBar breakPoint={700} isVisible={true} />
      </div>
    );
  }
}
