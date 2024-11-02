import Button from "./Button";
import Students from "../assets/Students.png";
import Instructors from "../assets/Instructors.png";
import Teaching from "../assets/Teaching.mp4";
import ReactPlayer from "react-player";
export default function WhatIsSkilline() {
  return (
    <section className="pt-[15.8rem] max-w-[128rem] m-auto">
      <h1 className="font-title text-[4.4rem] leading-[180%] text-center text-main-0 font-semibold">
        What is{" "}
        <span className="font-title text-[4.4rem] text-secondary-0 font-semibold ">
          Skilline?
        </span>
      </h1>
      <p className="text-[2.4rem] leading-[180%] font-paragraph text-[#464646] text-center max-w-[110rem] m-auto tracking-[2%] ">
        Skilline is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>
      <div className="flex mt-[8rem] gap-[10rem]">
        <div className="w-[60rem] h-[40rem] flex items-center justify-center relative">
          <img src={Instructors} alt="Instructors" />
          <h2 className=" absolute font-title font-semibold text-white text-[3.2rem] capitalize">
            FOR INSTRUCTORS
          </h2>
          <Button className=" font-title text-white text-[2.2rem] absolute mt-[15rem] w-[28.3rem] h-[8rem] border border-white rounded-[8rem]">
            Start a class today
          </Button>
        </div>
        <div className="w-[60rem] h-[40rem] flex items-center justify-center relative  ">
          <img src={Students} alt="Students" />
          <h2 className="absolute font-title font-semibold text-white text-[3.2rem] capitalize">
            FOR STUDENTS
          </h2>
          <Button className="font-title text-white text-[2.2rem] absolute mt-[15rem] w-[28.3rem] h-[8rem] bg-[#23BDEE] rounded-[8rem]">
            Enter access code
          </Button>
        </div>
      </div>
      <div className="flex mt-[16rem] items-center">
        <div className="w-[75rem]">
          <h1 className=" text-main-0 font-title text-[3.6rem] leading-[160%]">
            Everything you can do in a physical classroom,
            <span className="font-title text-[3.6rem] leading-[160%] text-secondary-0 ">
              you can do with Skilline
            </span>
          </h1>
          <p className="text-tertiary-0 font-title text-[2.4rem] leading-[180%] tracking-[2%]  ">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <Button className="text-tertiary-0 text-[2.2rem] leading-[180%] underline mt-[3rem] font-title">
            Learn more
          </Button>
        </div>
        <ReactPlayer
          url={Teaching}
          playing
          loop
          muted
          controls
          className=" w-[70.5rem] h-[47rem]"
        />
      </div>
    </section>
  );
}
