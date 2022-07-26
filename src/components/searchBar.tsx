import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="flex flex-row w-full">
      <input className="outline outline-1 w-full"></input>
      <AiOutlineSearch onClick={() => console.log("yoyo")}className="cursor-pointer animate-bounce flex justify-center w-10 m-1" />
    </div>
  );
}
