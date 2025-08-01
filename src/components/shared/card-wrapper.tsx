import { useRef } from "react";
import star from "../../assets/star.png";

interface CardWrapperProps {
  index: number;
  children: React.ReactNode;
  review: string;
}

const CardWrapper = ({ index, children, review }: CardWrapperProps) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const cardElement = cardRefs.current[index];
      if (!cardElement) return;

      const rect = cardElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;

      cardElement.style.setProperty("--start", String(angle + 60));
    };

  return (
    <div
      id="card-wrapper"
      ref={(el: HTMLDivElement | null) => {
        if (el) {
          cardRefs.current[index] = el;
        }
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src={star} alt="star" className="size-5" />
        ))}
      </div>
      <div className="glow"></div>
      <p className="text-white-50 mb-5">{review}</p>
      {children}
    </div>
  );
};

export default CardWrapper;
