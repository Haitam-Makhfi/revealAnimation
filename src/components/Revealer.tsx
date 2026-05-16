import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
interface RevealerProps {
  onDone: () => void;
}
export default function Revealer({ onDone }: RevealerProps) {
  useGSAP(() => {
    // console.log("revealer running, timeline exists?", !!sequenceAnimation);
    // if (!sequenceAnimation) return;
    gsap
      .timeline({ force3D: true, onComplete: onDone })
      .to("#revealerOne", {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut",
      })
      .to(
        "#revealerTwo",
        {
          yPercent: 100,
          duration: 1.5,
          ease: "power4.inOut",
        },
        "<",
      );
  }, []);

  return (
    <div id="revealers" className="fixed w-screen h-screen inset-0 z-50">
      <div
        id="revealerOne"
        className="absolute inset-0 w-full h-full bg-olive-200"
      ></div>
      <div
        id="revealerTwo"
        className="absolute inset-0 w-full h-full bg-olive-200"
      ></div>
    </div>
  );
}
