export default function Adress(props:{
    City:string,
    pin:string,
    full:string
  }){
  return <div className="flex flex-col hidden md:block">
  <h3>{props.City}</h3>
  <h4>{props.pin}</h4>
  {props.full}
  </div>
}
