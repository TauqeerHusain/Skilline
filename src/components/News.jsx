import Button from "./Button.jsx";
import NewsLatest from "../assets/News.png";
import News1 from "../assets/News2.png";
import News2 from "../assets/News3.png";
import News3 from "../assets/News4.png";

const newsData = [
  {
    id: 1,
    tag: "PRESS RELEASE",
    heading:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    paragraph: "Class Technologies Inc., the company that created Class,...",
    image: News1,
  },
  {
    id: 2,
    tag: "NEWS",
    heading:
      "Zoom’s earliest investors are betting millions on a better Zoom for schools",
    paragraph:
      "Zoom was never created to be a consumer product. Nonetheless, the...",
    image: News2,
  },
  {
    id: 3,
    tag: "PRESS RELEASE",
    heading:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    paragraph:
      "This year, investors have reaped big financial returns from betting on Zoom...",
    image: News3,
  },
];

export default function News() {
  return (
    <section className="max-w-[128rem] w-full m-auto mt-[15rem] ">
      <h1 className=" text-center font-paragraph font-bold leading-[180%] text-[3.6rem] text-main-0">
        Lastest News and Resources
      </h1>
      <p className="mt-5 text-center font-paragraph text-[2.4rem] leading-[180%] text-tertiary-0">
        See the developments that have occurred to Skillines in the world
      </p>
      <div className="flex mt-[10rem] gap-[12rem]">
        <div className="flex flex-col ">
          <img src={NewsLatest} alt="News" className="w-[64rem] h-[34rem]" />
          <Button className="mt-[4rem] text-main-0 font-title text-[2.4rem] leading-[180%] bg-[#F4C467] w-[13rem] py-[2px] rounded-[8rem]">
            NEWS
          </Button>
          <div className="max-w-[64rem] w-full ">
            <h2 className="mt-[2rem] font-title font-medium text-[2.6rem] text-main-0 leading-[180%]">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h2>
            <p className="mt-[2rem] font-title text-[2rem] leading-[180%] text-tertiary-0">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <Button className="mt-[2.8rem] font-title text-[2rem] leading-[180%] text-tertiary-0 hover:underline">
              Read more
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-[5rem] w-[79.7rem] ">
          {newsData.map((data, id) => (
            <div key={id} className="flex flex-row gap-x-[4rem] ">
              <span className="relative">
                <img
                  src={data.image}
                  className="w-[28rem] h-[20rem] object-contain"
                />
                <Button className="absolute top-[11rem] left-[5rem]   w-[10.4rem] h-max pt-[4px] pb-[3px] bg-[#F4C467] rounded-[8rem]">
                  {data.tag}
                </Button>
              </span>
              <div>
                <h1 className=" w-[47.7rem] font-title text-[#252641] text-[2.2rem] font-medium leading-[180%]">
                  {data.heading}
                </h1>
                <p className="font-title text-[2rem] leading-[180%] text-tertiary-0">
                  {data.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
