import { Popover } from "@headlessui/react";

function Popups(props: { keyid: string; values: string[] }) {
  return (
    <nav className="outline outline-1 flex flex-row justify-around">
      <Popover>
        <Popover.Button>{props.keyid}</Popover.Button>
        <Popover.Panel>
          <div className="absolute bg-red-500">
              {props.values.forEach((element: string, i: number) => {
                console.log(element);
                return <div key={i}>{element}</div>;
              })}
          </div>
        </Popover.Panel>
      </Popover>
    </nav>
  );
}

export default function NavigationBar() {
  return <Popups keyid="some" values={["some data", "some"]} />;
}
