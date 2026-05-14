import { useGSAP } from "@gsap/react";
import coverImg2 from "../assets/imgs/coverImg2.jpg";
import { SplitText } from "gsap/SplitText";
interface gridProps {
  sequenceAnimation: gsap.core.Timeline | null;
}
export default function Grid({ sequenceAnimation }: gridProps) {
  useGSAP(() => {
    if (!sequenceAnimation) return;
    let splitFeatured = SplitText.create("#featureWork p", {
      type: "words",
      mask: "words",
    });
    let splitH2 = SplitText.create("#mainContent h2", {
      type: "lines",
      mask: "lines",
    });
    let splitAdress = SplitText.create("#mainContent #location", {
      type: "lines",
      mask: "lines",
    });
    sequenceAnimation
      .fromTo(
        splitFeatured.words,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        "flipDone+=0.5",
      )
      .fromTo(
        splitH2.lines,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        "flipDone+=0.5",
      )
      .fromTo(
        splitAdress.lines,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        "flipDone+=0.5",
      )
      .fromTo(
        "#socials .social-lines",
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        "flipDone+=0.5",
      );
  }, [sequenceAnimation]);
  return (
    <section
      id="grid"
      className="fixed bottom-0 w-screen h-[65%] grid grid-cols-[0.9fr_1fr_1.5fr] grid-rows-2 gap-4 px-8 pb-4"
    >
      <div
        id="featureWork"
        className="row-span-2 flex flex-col justify-between"
      >
        <p className="font-science-gothic-light capitalize">featured work</p>
        <div id="galery"></div>
      </div>
      <div
        id="mainContent"
        className="row-span-2 pr-4 flex flex-col justify-between"
      >
        <h2
          className="font-montreal-medium 
        font-bold
         text-2xl/[1.7rem] normal-case"
        >
          We are a future brand mixing the best of both worlds : design and
          code.
        </h2>
        <div
          id="links"
          className="flex justify-between text-xs font-science-gothic-regular"
        >
          <div id="location" className="w-[calc(50%-3rem)]">
            DIVISION 4 studio riverston building -28 orchard lane n1 4dx
          </div>
          <div id="socials" className="w-1/2 flex flex-col text-left">
            <div className="overflow-hidden mb-1.5">
              <div className="social-lines">let's connect</div>
            </div>
            <div className="overflow-hidden">
              <div className="social-lines">linkedin</div>
            </div>
            <div className="overflow-hidden">
              <div className="social-lines">instagram</div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={coverImg2}
        className="w-full h-full row-span-2 object-cover object-center"
        alt="Cover Image"
        id="coverImg"
      />
    </section>
  );
}
