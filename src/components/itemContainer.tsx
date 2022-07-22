import Image from 'next/image';
import imp from '../asset/a.png';

export default function ItemContainer(props:any) {
  return <div className="w-full" {...props}>
    <Image src={imp}
      width={1920}
      height={400}
      layout="responsive"
    />
    <p className="overflow-auto text-xl flex flex-row justify-center">Some Random Text</p>
  </div>
}
