export default function HeadingText(props: { text: string }) {
  return <h2 className="font-bold text-2xl sm:text-3xl">{props.text}</h2>;
}
