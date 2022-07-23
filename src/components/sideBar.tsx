import { Dispatch, SetStateAction } from "react";

export default function SideBar({
  isVisible,
  changeIsVisible
}: {
  isVisible: boolean,
  changeIsVisible: Dispatch<SetStateAction<boolean>>
  }): JSX.Element {
    console.log(isVisible);
    
  return (
    <div className={`transform ${!isVisible ? "-translate-x-full" : ""} absolute top-0 left-0 flex flex-col w-3/5 h-screen m-0 p-0 bg-slate-900`}>
      <button onClick={()=> isVisible ? changeIsVisible(false) : changeIsVisible(true)} className="text-pink-50">CLOSE</button>
    </div>
  );
}
