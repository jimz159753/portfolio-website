import { CardHistory } from "./shared/card-history";
import { CardProfile } from "./shared/card-profile";
import { HeaderWrapper } from "./shared/header-wrapper";

export const About = () => {
  return (
    <section id="about">
      <div className="about-container flex flex-col w-[100%] h-screen">
        <div className="flex-center flex-col gap-4">
          <HeaderWrapper>About Me</HeaderWrapper>
          <p className="text-color-white-50 text-5xl font-light">
            Luis Jimenez,{" "}
            <span className="text-gray-400">Your Software Engineer</span>
          </p>
          <p className="text-gray-400 text-lg">
            Brief initial presentation of myself and my previous experience.
          </p>
          <div className="flex gap-4">
            <CardProfile />
            <CardHistory />
          </div>
        </div>
      </div>
    </section>
  );
};
