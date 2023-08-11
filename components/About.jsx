import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 my-12 md:max-w-[700px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="md:text-lg">
            Full stack Junior developer, wanting to enter the technological
            world, and learn new disciplines that help me grow personally and
            professionally.
          </p>
          <p className="md:text-lg">
            I have worked on projects with databases I have manipulated
            client-server data, using ORM or Typescript
          </p>
        </div>
        <span className="font-semibold text-sm">
          Send me an email if you are interested in my profile
        </span>
        <div className="w-fit flex flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Button>Send Message</Button>
        </div>
      </div>

      <Image
        src={"/profile.jpg"}
        width={200}
        height={200}
        className="rounded-lg hover:scale-110 transition cursor-pointer"
        alt="profile"
      />
    </div>
  );
};

export default About;
