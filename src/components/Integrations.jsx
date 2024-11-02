import Button from "./Button.jsx";
import Features6 from "../assets/Features6.png";

export default function Integrations() {
  return (
    <div className="flex max-w-[128rem] w-full m-auto gap-[29.2rem]">
      <span>
        <img src={Features6} alt="Integrations" />
      </span>

      <div className="flex flex-col max-w-[68.7rem] ">
        <h1 className=" max-w-[48rem] w-full  font-paragraph text-[3.6rem] font-bold text-main-0 leading-[160%]">
          200+ educational tools and platform
          <span className=" font-paragraph text-[3.6rem] font-bold text-secondary-0 leading-[160%]">
            {" "}
            integrations
          </span>
        </h1>
        <p className=" mt-[3rem] max-w-[68.7rem] w-full font-paragraph text-[2.4rem]  text-tertiary-0 leading-[180%]">
          Schoology has every tool your classroom needs and comes pre-integrated
          with more than 200+ tools, student information systems (SIS), and
          education platforms.
        </p>
        <Button className=" mt-[4.5rem] font-paragraph text-[2.4rem] w-[28rem] pt-[1.9rem] pb-[1.8rem] border border-secondary-0 rounded-[8rem] text-secondary-0 hover:underline">
          See more features
        </Button>
      </div>
    </div>
  );
}
