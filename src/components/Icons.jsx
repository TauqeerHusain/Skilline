import Icons1 from "../assets/Icons1.svg";
import Icons2 from "../assets/Icons2.svg";
import Icons3 from "../assets/Icons3.svg";

const iconsData = [
  {
    id: 1,
    text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    icons: Icons1,
  },
  {
    id: 1,
    text: "TA’s and presenters can be moved to the front of the class.",
    icons: Icons2,
  },
  {
    id: 1,
    text: "Teachers can easily see all students and class data at one time.",
    icons: Icons3,
  },
];
export default function Icons() {
  return (
    <>
      <ul className="flexflex-col   ">
        {iconsData.map((icon, id) => (
          <div key={id} className="flex gap-14 ">
            <img src={icon.icons} className="mt-[5rem]" />
            <li className="mt-[5rem] font-title text-tertiary-0 text-[2.2rem] tracking-[2%] leading-[180%]">
              {icon.text}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
