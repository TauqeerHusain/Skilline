import Card from "./Card";
import Invoice from "../assets/Invoice.png";
import Scheduling from "../assets/Scheduling.png";
import CustomerTracking from "../assets/Customer.png";
const cardData = [
  {
    id: 1,
    heading: "Online Billing, Invoicing, & Contracts ",
    paragraph:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    images: Invoice,
  },
  {
    id: 2,
    heading: "Easy Scheduling & Attendance Tracking",
    paragraph:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    images: Scheduling,
  },
  {
    id: 3,
    heading: "Customer Tracking",
    paragraph:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    images: CustomerTracking,
  },
];

export default function AllInOne() {
  return (
    <section className="pt-[16rem] max-w-[128rem] m-auto   ">
      <h1 className="font-title text-[#2F327D] text-[3.6rem] text-center">
        All-In-One {""}
        <span className="font-title text-[#F48C06] text-[3.6rem]">
          Cloud Software
        </span>
      </h1>
      <p className="mt-[2rem] font-title text-[#696984] text-[2.4rem] w-[83.7rem] text-center m-auto">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <div className="flex items-center justify-center">
        {cardData.map((data, id) => (
          <Card
            key={id}
            heading={data.heading}
            paragraph={data.paragraph}
            img={data.images}
          />
        ))}
      </div>
    </section>
  );
}
