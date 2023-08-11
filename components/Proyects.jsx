import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const proyects = [
  {
    title: "Notes App",
    description: "My first app with React, Tailwind CSS, and Vercel",
    link: "https://nwnung-notes.vercel.app",
    img: "/notes-app-logo.png",
    repositorie: "https://github.com/nwnung/notes-app",
  },
];

const Proyects = () => {
  return (
    <div className="flex flex-col gap-8 my-16 max-w-[70vw]">
      {proyects.map((proyect) => (
        <Link
          href={proyect.link}
          className="flex flex-col gap-7 transition px-10 py-6 rounded-md cursor-pointer text-lg  md:w-[600px] hover:bg-slate-200"
          key={proyect.title}
        >
          <Image
            alt="profile"
            src={proyect.img}
            width={160}
            height={160}
            className="rounded"
          />
          <p>{proyect.description}</p>
          <p className="font-semibold">{proyect.title}</p>
          <div className="w-fit">
            <Button>View Code</Button>
          </div>
          {/* <Options /> */}
        </Link>
      ))}
    </div>
  );
};

export default Proyects;
