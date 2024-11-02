import Features from "../assets/Features.png";
import Features2 from "../assets/Features2.png";
import Features3 from "../assets/Features3.png";
import Features4 from "../assets/Features4.png";
import Features5 from "../assets/Features5.png";
import Button from "../components/Button.jsx";
import Icons from "./Icons";

export default function OurFeatures() {
  return (
    <section className="mt-[16rem] ">
      <div>
        <h1 className="font-title text-[3.6rem] font-bold text-main-0 leading-[180%] text-center">
          Our{" "}
          <span className="font-title text-[3.6rem] font-bold text-secondary-0 leading-[180%]">
            Features
          </span>
        </h1>
        <p className=" mt-5 font-title text-[2.4rem] text-center text-tertiary-0 leading-[180%]">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="mt-[17.6rem] max-w-[128rem] m-auto flex">
          <span>
            <img
              src={Features}
              alt="Video Calling"
              className="w-[89.6rem]  object-contain "
            />
          </span>

          <div className="max-w-[54.2rem] w-full">
            <h1 className="font-title text-[4rem] font-semibold text-main-0 leading-[160%]">
              A{" "}
              <span className="font-title text-[4rem] font-semibold text-secondary-0 leading-[160%] ">
                {" "}
                user interface
              </span>{" "}
              designed for the classroom
            </h1>
            <Icons />
          </div>
        </div>
        <section className="flex mt-[16rem] max-w-[128rem] m-auto">
          <div className="max-w-[56.8rem]  m-auto">
            <h1 className="font-title max-w-[39.8rem] text-[4rem] font-semibold text-main-0 leading-[160%]">
              <span className="font-title text-[4rem] font-semibold text-secondary-0 leading-[160%]">
                Tools{" "}
              </span>{" "}
              For Teachers And Learners
            </h1>
            <p className=" max-w-[56.8rem] w-full h-40 mt-5 font-title text-[2.2rem]  text-tertiary-0 leading-[180%]">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <span className="w-[63.7rem] h-[61.1rem]">
            <img
              src={Features2}
              alt="Tools for students"
              className="object-contain"
            />
          </span>
        </section>
        <section className="mt-[16rem] max-w-[128rem] m-auto  ">
          <div className="flex gap-[24.8rem]">
            <span>
              <img src={Features3} alt="Assesment Quizzes" />
            </span>
            <div className="max-w-[59.6rem]">
              <h1 className="font-title max-w-[34.7rem] text-[4rem] font-semibold text-main-0 leading-[160%]">
                Assessments,{" "}
                <span className="font-title text-[4rem] font-semibold text-secondary-0 leading-[160%]">
                  Quizzes
                </span>
                , Tests
              </h1>
              <p className="max-w-[59.6rem] w-full h-40 mt-5 font-title text-[2.2rem]  text-tertiary-0 leading-[180%]">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-[16rem] max-w-[128rem] m-auto">
          <div className="flex gap-[24.8rem]">
            <div className="max-w-[64.5rem]">
              <div className="max-w-[420rem] w-full">
                <h1 className="font-title  text-[4rem] font-semibold text-main-0 leading-[160%]">
                  <span className="font-title text-[4rem] font-semibold text-secondary-0 leading-[160%]">
                    Class Management {""}
                  </span>
                  Tools for Educator{" "}
                </h1>
              </div>
              <p className="max-w-[59.6rem] w-full h-40 mt-5 font-title text-[2.2rem]  text-tertiary-0 leading-[180%]">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <span>
              <img src={Features4} alt="Class Management" />
            </span>
          </div>
        </section>
        <section className="mt-[16rem] max-w-[128rem] m-auto">
          <div className="flex gap-[24.8rem]">
            <span>
              <img src={Features5} alt="Class Management" />
            </span>
            <div className="max-w-[128rem]">
              <div className="max-w-[54rem] w-full">
                <h1 className="font-title  text-[4rem] font-semibold text-main-0 leading-[160%]">
                  One-on-One{" "}
                  <span className="font-title text-[4rem] font-semibold text-secondary-0 leading-[160%]">
                    Discussions {""}
                  </span>
                </h1>
              </div>
              <p className="max-w-[59.6rem] w-full h-40 mt-5 font-title text-[2.2rem]  text-tertiary-0 leading-[180%]">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-[15rem] mb-[16rem]">
            <Button className=" font-paragraph text-[2.4rem] w-[28rem] pt-[1.9rem] pb-[1.8rem] border border-secondary-0 rounded-[8rem] text-secondary-0 hover:underline">
              See more features
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
