import { Linkedin, MessageSquare, Github } from "lucide-react";
import profile from "../../assets/profile.webp";

export const CardProfile = () => (
  <div className="card-border rounded-lg p-10 flex flex-col justify-between gap-10 md:w-2/5 sm:w-full">
    <div className="flex justify-center items-center relative">
      <img
        src={profile}
        alt="Luis Jimenez"
        className="w-full grayscale brightness-80 rounded-lg"
      />
      <div className="absolute bottom-5 bg-black-50 flex items-center gap-3 px-3 py-2 rounded-full w-fit h-fit">
        <div className="profile-point rounded-full w-1.5 h-1.5 bg-green-500 shadow-xl" />
        <p className="text-lg text-white-50 text-sm">Available for work</p>
      </div>
    </div>

    <p className="text-color-white-50 text-2xl font-light">
      Hello, I'm Luis Jimenez
      <br />
      Software Engineer Based in México.
    </p>
    <div className="flex flex-col gap-8 items-center">
      <div className="grid grid-cols-3 w-full justify-items-center">
        <Linkedin
          className="w-5 h-5 cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/luisjimz/", "_blank")
          }
        />
        <div className="border-x border-gray-500 px-10">
          <Github
            className="w-5 h-5 cursor-pointer"
            onClick={() =>
              window.open("https://github.com/jimz159753", "_blank")
            }
          />
        </div>
        <MessageSquare
          className="w-5 h-5 cursor-pointer"
          onClick={() => window.open("https://wa.me/523315027257", "_blank")}
        />
      </div>
      <div className="w-full border border-gray-500" />
    </div>
  </div>
);
