export default function HeadingText(props: { text: string }) {
  return <h2 className="font-bold outline-1 outline outline-gray-500 text-xl sm:text-3xl">{props.text}</h2>;
}
