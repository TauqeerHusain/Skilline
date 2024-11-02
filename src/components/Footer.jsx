import FooterLogo from "../assets/FooterLogo.png";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="mt-[16rem] bg-[#252641] pb-[10.6rem]  m-auto">
      <div className="pt-[7.4rem] flex items-center justify-center gap-[4.1rem]">
        <img src={FooterLogo} alt="Skilline" />
        <span className="h-[8rem] border border-r-[#626381]" />
        <h1 className="w-[15.6rem] font-main font-semibold text-white text-[2.2rem]">
          Virtual Class for Zoom
        </h1>
      </div>
      <h1 className="font-main font-medium mt-[9.5rem] text-[#B2B3CF] tracking-wide text-[2.2rem] text-center">
        Subscribe to get our Newsletter
      </h1>
      <div className="flex justify-center items-center mt-[2rem] gap-[2rem] m-auto max-w-[59.9rem]">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className=" rounded-[8rem] pt-[1.5rem] pb-[1.5rem] w-[30rem] bg-transparent border border-white pl-[3rem]"
        />
        <Button className="bg-gradient-to-r from-[#545AE7] to-[#393FCF] w-[10rem] text-white pt-[1.4rem] pb-[1.3rem] rounded-[6rem] shadow-lg shadow-blue-500/50">
          Subscribe
        </Button>
      </div>
      <div className="flex justify-center mt-[9.8rem] items-center m-auto gap-[2rem]">
        <h1 className="font-title text-[2.2rem] text-tertiary-0 ">Careers</h1>
        <div className="h-[1.7rem]  border border-r-[#626381]" />
        <h1 className="font-title text-[2.2rem] text-tertiary-0 ">
          Privacy Policy
        </h1>
        <div className="h-[1.7rem]  border border-r-[#626381]" />
        <h1 className="font-title text-[2.2rem] text-tertiary-0 ">
          Terms & Conditions
        </h1>
      </div>
      <p className="text-center mt-[2rem] text-[#B2B3CF] font-title text-[2.2rem]">
        &copy; 2024 Class Technologies Inc.{" "}
      </p>
    </footer>
  );
}
