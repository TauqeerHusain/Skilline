import Button from "./Button.jsx";
import TestimonialsImg from "../assets/Testimonials.png";
export default function Testimonials() {
  return (
    <div className="mt-[17rem] max-w-[128rem] m-auto flex gap-[15.8rem]">
      <div className="max-w-[61.2rem]">
        <h1 className="font-paragraph text-[6rem] font-bold text-main-0">
          What They Say?
        </h1>
        <p className=" font-title text-[2.6rem] text-tertiary-0 leading-[160%] mb-[2.6rem] ">
          Skilline has got more than 100k positive ratings from our users around
          the world.
        </p>

        <p className=" font-title text-[2.6rem] text-tertiary-0 leading-[160%] mb-[4.2rem]">
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p className=" font-title text-[2.6rem] text-tertiary-0 leading-[160%]">
          Are you too? Please give your assessment
        </p>
        <Button className="flex justify-between p-0 pl-[2rem] items-center  mt-[4.5rem] font-title leading-[160%] text-[2.2rem] w-[40.3rem]  border border-secondary-0 rounded-[8rem] text-secondary-0 ">
          Write Your Assesment
          <div className="  w-[8rem] h-[8rem] text-secondary-0 rounded-[50%] border border-secondary-0 flex justify-center items-center">
            &rarr;
          </div>
        </Button>
      </div>
      <div>
        <img src={TestimonialsImg} alt="Testimonials" />
      </div>
    </div>
  );
}
