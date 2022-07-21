import {AiOutlineSearch} from 'react-icons/ai';

export default function SearchBar() {
  return (
    <div className="flex flex-row w-full">
      <input className="outline outline-1 w-full"></input>
      <AiOutlineSearch className="flex justify-center w-10 m-1"/>
    </div>
  );
}
