export default function Card({ img, heading, paragraph }) {
  return (
    <div className="flex flex-col w-[45rem] items-center mt-[10rem] justify-between">
      <img className=" w-[10rem] h-[10rem] object-contain" src={img} />
      <h1 className=" font-title text-[3rem] text-center text-[#2F327D] mt-[6rem]  min-h-[9rem]">
        {heading}
      </h1>
      <p className="leading-[180%]  text-center font-title text-[#696984] text-[2rem] mt-[2.4rem]">
        {paragraph}
      </p>
    </div>
  );
}
