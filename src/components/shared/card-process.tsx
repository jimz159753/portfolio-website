export const CardProcess = ({
  step,
  title,
  description,
  icon,
}: {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="process-card relative card-border rounded-xl p-10 break-inside-avoid-column flex flex-col gap-4">
    <p className="text-color-white-50 text-2xl absolute top-4 right-6">
      {step}
    </p>
    {icon}
    <p className="text-color-white-50 text-3xl">{title}</p>
    <div className="w-full border border-gray-500 " />
    <p className="text-color-white-50">{description}</p>
  </div>
);
