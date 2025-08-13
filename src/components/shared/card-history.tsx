import { historyData, skillsData } from "../../lib/constants";

export const CardHistory = () => (
  <div className="card-border rounded-lg p-10 flex flex-col gap-4 md:w-1/2 sm:w-full">
    <p className="text-gray-400">
      I'm Luis Jimenez dedicated in developing software solutions based in the
      vibrant city of México. I specialize in building web applications using
      modern technologies and frameworks to craft exceptional digital
      experiences.
    </p>
    <div className="w-full border border-gray-500" />
    <div className="flex flex-wrap gap-2">
      {skillsData.map((item) => (
        <p
          className="text-gray-500 py-2 px-4 w-fit bg-neutral-950 rounded-lg"
          key={item}
        >
          {item}
        </p>
      ))}
    </div>
    <div className="w-full border border-gray-500 " />
    <div className="flex flex-col gap-4">
      {historyData.map((item) => (
        <div
          className="flex md:flex-row flex-col justify-between bg-neutral-950 rounded-lg py-4 px-4"
          key={item.year}
        >
          <p className="text-gray-500">{item.position}</p>
          <p className="text-gray-500">{item.company}</p>
          <p className="text-gray-500">{item.year}</p>
        </div>
      ))}
    </div>
  </div>
);
