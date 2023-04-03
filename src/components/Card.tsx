import Card from "@/interfaces/Card";

const Card = (props: Card):JSX.Element => {
return (
  <li
  key={props.title}
    className={`z-5 ${props.src} cursor-pointer bg-cover bg-no-repeat bg-center w-auto h-[100%] duration-300 hover:duration-300 group`}
  >
    <div className="w-[100%] h-[100%] justify-center text-center z-1 opacity-0 group-hover:opacity-100 hover:bg-[rgba(0,0,0,0.3)] hover:duration-300 flex flex-col">
      <h4 className="text-[1.5rem]">{props.title}</h4>
      <p className="border-top-[#fff] border-t-2 w-[75%] self-center">
        {props.subtitle}
      </p>
    </div>
  </li>
);
}

export default Card;