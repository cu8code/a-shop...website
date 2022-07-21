import {AiOutlineSearch} from 'react-icons/ai';

export default function SearchBar() {
  return (
    <div className="flex flex-row">
      <input className="basis-11/12 text-2xl outline outline-1"></input>
      <p className="basis-1 text-4xl flex flex-row w-full justify-end"><AiOutlineSearch /></p>
    </div>
  );
}
