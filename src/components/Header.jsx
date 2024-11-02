import Button from "./Button";
import WatchNow from "../assets/watchNow.png";
import HeaderImg from "../assets/Header.png";
import Google from "../assets/google.png";
import Netflix from "../assets/netflix.png";
import Airnab from "../assets/airbnb.png";
import Amazon from "../assets/amazon.png";
import Facebook from "../assets/facebook.png";
import Grab from "../assets/grab.png";

const images = [
  { id: 1, image: Google },
  { id: 2, image: Netflix },
  { id: 3, image: Airnab },
  { id: 4, image: Amazon },
  { id: 5, image: Facebook },
  { id: 6, image: Grab },
];

export default function Header() {
  return (
    <>
      <header className="max-w-[128rem] m-auto flex items-center justify-between flex-row ">
        <div className="w-full ">
          <h1 className="font-title  text-[5.4rem] text-[#2F327D] font-bold ">
            <span className="font-title text-[5.4rem] text-[#F48C06] font-bold ">
              Studying {""}
            </span>
            Online is now much easier
          </h1>
          <p className=" w-full text-[2.4rem] font-paragraph text-[#464646] mt-[3.4rem]">
            Skilline is an interesting platform that will teach <br /> you in
            more an interactive way
          </p>
          <div className="flex items-center flex-row mt-[5.2rem]">
            <Button className="flex items-center justify-center text-white font-title text-[2.2rem] bg-[#F48C06] w-[22rem] h-[6rem]  py-[2.2rem] pb-[2.2rem] rounded-[8rem]">
              Join for free
            </Button>

            <img
              src={WatchNow}
              alt="watch-now"
              className=" w-[8rem] h-[8rem] object-contain"
            />
            <p className="text-[#252641] font-title text-[2.4rem]">
              Watch how it works
            </p>
          </div>
        </div>
        <div>
          <img src={HeaderImg} alt="Header-Banner" />
        </div>
      </header>
      <div className="mt-[10rem]">
        <h1 className="text-center text-[#696984] font-title tracking-[2%] text-[2.8rem]">
          Trusted by 5,000 + Companies Worldwide
        </h1>
        <div className="flex justify-between mt-[4.2rem] max-w-[128rem] m-auto">
          {images.map((img, id) => (
            <img src={img.image} key={id} className="object-contain" />
          ))}
        </div>
      </div>
    </>
  );
}
