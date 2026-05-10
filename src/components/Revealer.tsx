import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
interface RevealerProps {
  mainTl: React.RefObject<gsap.core.Timeline | null>;
}
export default function Revealer({ mainTl }: RevealerProps) {
  useGSAP(() => {
    if (!mainTl.current) return;
    mainTl.current
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
      )
      .addLabel("revealDone");
  });

  return (
    <div id="revealers" className="fixed w-screen h-screen inset-0 z-3">
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
