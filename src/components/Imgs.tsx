import img1 from "../assets/imgs/img1.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import img5 from "../assets/imgs/img5.png";
import img6 from "../assets/imgs/img6.jpg";
import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
interface imgsProps {
  mainTl: React.RefObject<gsap.core.Timeline | null>;
}
export default function Imgs({ mainTl }: imgsProps) {
  useGSAP(() => {
    if (!mainTl.current) return;
    const imgs = document.querySelectorAll("#imgs img");
    mainTl.current
      .set(
        imgs,
        {
          scale: 1.5,
        },
        "0",
      )
      .set(
        "#imgs img:not(:first-child)",
        {
          opacity: 0,
        },
        "0",
      )
      .to(
        "#imgs img:first-child",
        {
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        },
        "revealDone-=0.30",
      )
      .to(
        "#imgs img:not(:first-child)",
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
          stagger: 0.8,
        },
        "<=+0.8",
      );
  });
  return (
    <div
      id="imgs"
      className="z-2 fixed w-screen h-screen inset-0 flex items-center justify-center"
    >
      <img
        src={img1}
        alt=""
        className="absolute inset-0 object-cover object-bottom"
      />
      <img
        src={img2}
        alt=""
        className="absolute inset-0 object-cover object-bottom"
      />
      <img
        src={img3}
        alt=""
        className="absolute inset-0 object-cover object-bottom"
      />
      <img
        src={img4}
        alt=""
        className="absolute inset-0 object-cover object-bottom"
      />
      <img
        src={img5}
        alt=""
        className="absolute inset-0 object-cover object-bottom"
      />
      <img
        src={img6}
        alt=""
        className="absolute inset-0 object-cover object-bottom"
      />
    </div>
  );
}
