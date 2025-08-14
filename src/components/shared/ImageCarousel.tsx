import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ImageCarouselProps {
  images: string[];
  altText?: string;
  autoPlay?: boolean;
}

export const ImageCarousel = ({
  images,
  altText = "carousel image",
  autoPlay = true,
}: ImageCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!autoPlay || !containerRef.current) return;

    const container = containerRef.current;
    const firstImage = container.firstElementChild as HTMLElement;
    if (!firstImage) return;

    const imageWidth = firstImage.offsetWidth;
    const gap = 16; // 4 * 4px (gap-4)
    const totalWidth = (imageWidth + gap) * images.length;

    // Create infinite loop animation
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(container, {
      x: -totalWidth,
      duration: 15,
      ease: "none",
    });

    animationRef.current = tl;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [autoPlay, images.length]);

  return (
    <div className="image-carousel relative w-full h-64 overflow-hidden rounded-xl">
      {/* Marquee Container */}
      <div ref={containerRef} className="flex gap-4 h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${altText} ${index + 1}`}
            className="w-80 h-full object-cover rounded-lg flex-shrink-0"
          />
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image}
            alt={`${altText} ${index + 1}`}
            className="w-80 h-full object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};
