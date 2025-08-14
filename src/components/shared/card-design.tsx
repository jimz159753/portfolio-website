export const CardDesign = ({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <div className="card-design relative card-border rounded-xl p-10 break-inside-avoid-column flex flex-col gap-4 h-full">
    <div className="flex flex-row gap-2 items-center">
      {icon}
      <p className="text-color-white-50 text-2xl font-light">{title}</p>
    </div>
    <p className="text-gray-400">{description}</p>
    {children}
  </div>
);
