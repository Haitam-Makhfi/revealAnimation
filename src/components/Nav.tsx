import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
interface imgsProps {
  sequenceAnimation: gsap.core.Timeline | null;
}
export default function Nav({ sequenceAnimation }: imgsProps) {
  useGSAP(() => {
    if (!sequenceAnimation) return;
    const logo1Split = SplitText.create("#logo h1", { type: "chars" });
    const logo2Split = SplitText.create("#logo div", { type: "chars" });
    sequenceAnimation
      .to(
        [logo1Split.chars, logo2Split.chars],
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "flipDone+=0.8",
      )
      .fromTo(
        "#logo",
        {
          x: 30,
        },
        {
          x: 0,
          ease: "power4.inOut",
          duration: 0.5,
        },
        ">",
      );
  }, [sequenceAnimation]);
  return (
    <nav className="fixed top-0 w-screen flex items-center justify-between p-8">
      <div id="logo" className="relative w-full h-10 overflow-hidden">
        <h1 className="font-montreal-bold text-4xl uppercase -translate-y-1/2  absolute top-1/2 left-0">
          Division 4
        </h1>
        <div className="font-montreal-bold text-4xl uppercase -translate-y-1.5 absolute top-full left-0">
          Division 4
        </div>
      </div>
      <ul className="flex items-center gap-4 font-science-gothic-regular text-sm">
        <li>about</li>
        <li>work</li>
        <li>services</li>
      </ul>
    </nav>
  );
}
