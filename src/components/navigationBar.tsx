import { Popover } from "@headlessui/react";

function Popups(props: { keyid: string, values: string[], className: string }): JSX.Element {
  return (
    <Popover className={props.className}>
      <Popover.Button>{props.keyid}</Popover.Button>
      <Popover.Panel>
        <div className="absolute bg-red-500">
          {(() => {
            return [...props.values].map((x, i) => {
              return <div key={i}>{x}</div>;
            });
          })()}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default function NavigationBar() {
  return (
    <nav className="flex flex-row justify-around outline-1 outline">
      <Popups keyid="Best Sheller" values={["some data", "some"]} className="hidden sm:block" />
      <Popups keyid="Customer Service" values={["some data", "some"]} className="hidden sm:block" />
      <Popups keyid="Mobile" values={["some data", "some"]} className="hidden sm:block" />
      <Popups keyid="Todays Deals" values={["some data", "some"]} className="hidden sm:block" />
      <Popups keyid="Electronic" values={["some data", "some"]} className="hidden md:block" />
      <Popups keyid="Fashion" values={["some data", "some"]} className="hidden md:block" />
      <Popups keyid="Book" values={["some data", "some"]} className="hidden lg:block" />
      <Popups keyid="New Release" values={["some data", "some"]} className="hidden lg:block" />
      <Popups keyid="Home & Kitchen" values={["some data", "some"]} className="hidden xl:block" />
      <Popups keyid="Computers" values={["some data", "some"]} className="hidden xl:block" />
      <Popups keyid="Coupons" values={["some data", "some"]} className="hidden xl:block" />
    </nav>
  );
}
