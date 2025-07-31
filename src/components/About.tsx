import profile from "../assets/profile.png";

export const About = () => {
  return (
    <section id="about">
      <div className="flex-center flex-col gap-4">
        <p className="header-text text-color-white">About me</p>
        <div className=" flex space">
          <p className="text-sm">
            I'm a software engineer with a passion for building web applications
            and mobile apps. I'm a quick learner and I'm always looking to
            improve my skills.
          </p>
          <img src={profile} alt="profile" className="w-1/2 grayscale" />
        </div>
      </div>
    </section>
  );
};
