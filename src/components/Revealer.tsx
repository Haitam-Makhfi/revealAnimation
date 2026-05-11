import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
interface RevealerProps {
  sequenceAnimation: gsap.core.Timeline | null;
}
export default function Revealer({ sequenceAnimation }: RevealerProps) {
  useGSAP(() => {
    console.log("revealer running, timeline exists?", !!sequenceAnimation);
    if (!sequenceAnimation) return;
    sequenceAnimation
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
  }, [sequenceAnimation]);

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
