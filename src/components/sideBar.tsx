import { Dispatch, SetStateAction } from "react";

export default function SideBar({
  isVisible,
  setSideBarVisible,
}: {
  isVisible: boolean;
  setSideBarVisible: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  console.log(isVisible);

  return (
    <div
      className={`${
        !isVisible ? "hidden" : "visible"
      } absolute top-0 left-0 flex flex-col w-80 h-screen m-0 p-0 bg-slate-900`}
    >
      <button
        onClick={() =>
          isVisible ? setSideBarVisible(false) : setSideBarVisible(true)
        }
        className="text-pink-50"
      >
        CLOSE
      </button>
    </div>
  );
}
