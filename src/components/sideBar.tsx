import { BiUser } from 'react-icons/bi'
import { ImCross } from 'react-icons/im';
import { useEffect, useState } from 'react'

export default function SideBar(props: {
  breakPoint: number;
  isVisible: boolean;
}) {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    })
  }, []);
  if (screenWidth > props.breakPoint && props.isVisible) {
    return <div></div>
  } else if (props.isVisible) {
    return <div className={"absolute w-6/12 h-screen top-0 left-0 bg-red-100 gap-3 flex flex-col"}>
      <button className="text-2xl flex w-full "><ImCross className="justify-center flex w-full" /></button>
      <div className="flex flex-row w-full" >
        <BiUser className="text-3xl" />
      </div>
      <p className="text-2xl">Signin</p>
    </div>
  } else {
    return <></>
  }
}
