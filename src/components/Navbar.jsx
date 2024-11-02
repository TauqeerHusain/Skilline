import Logo from "../assets/Logo.png";
import Button from "./Button.jsx";
export default function Navbar() {
  return (
    <nav className="pt-[6rem] py-[8.1rem] m-auto relative">
      <div className="w-full max-w-[128rem] m-auto flex">
        <img
          src={Logo}
          alt="Skilline"
          className="w-[15rem] h-[8.3rem]  object-contain"
        />

        <div
          className="flex justify-between items-center gap-[8rem] ml-auto
        "
        >
          <a
            href="/home"
            className="font-title text-[2.2rem] font-normal text-[#252641]  hover:underline "
          >
            Home
          </a>
          <a
            href="/Careers"
            className="font-title text-[2.2rem] font-normal text-[#252641] hover:underline "
          >
            Careers
          </a>
          <a
            href="/Blog"
            className="font-title text-[2.2rem] font-normal text-[#252641] hover:underline "
          >
            Blog
          </a>
          <a
            href="/AboutUs"
            className="font-title text-[2.2rem] font-normal text-[#252641] hover:underline "
          >
            About Us
          </a>
          <div className="flex gap-[2.9rem]">
            <Button className="text-[#6C6C6C] bg-white   w-[16rem] h-[6rem]  pt-[1.3rem] pb-[1.4rem] rounded-[2rem] font-title text-[2.2rem]">
              Login
            </Button>
            <Button className="text-white font-title text-[2.2rem] bg-[#F48C06] w-[16rem] h-[6rem]  pt-[1.3rem] pb-[1.4rem] rounded-[8rem]">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
