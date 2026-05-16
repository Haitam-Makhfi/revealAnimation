import img1 from "../assets/imgs/img1.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import img5 from "../assets/imgs/img5.png";
import img6 from "../assets/imgs/img6.jpg";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
// import { gsap } from "gsap";
interface imgsProps {
  sequenceAnimation: gsap.core.Timeline | null;
}
export default function Imgs({ sequenceAnimation }: imgsProps) {
  useGSAP(() => {
    console.log("imgs running, timeline exists?", !!sequenceAnimation);
    if (!sequenceAnimation) return;
    let imgs = Array.from(document.querySelectorAll("#imgs img"));
    sequenceAnimation
      .addLabel("revealDone")
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
          duration: 0.8,
          ease: "power4.inOut",
        },
        "revealDone+=1",
      )
      .to(
        "#imgs img:not(:first-child)",
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.6,
          onComplete: () => {
            //delte inused imgs
            imgs = imgs.filter((img) => {
              if (!img.classList.contains("galeryImg")) {
                img.remove();
              }
              return img.classList.contains("galeryImg");
            });
          },
        },
        "<=+0.6",
      )
      .addLabel("galeryReveal")
      .add(() => {
        //flipping the imgs to the galery section
        const state = Flip.getState(imgs);
        imgs.forEach((img) => {
          document.querySelector("#galery")?.appendChild(img);
          img.classList.add("display");
          document.querySelector("#galery")?.classList.add("active");
        });
        return Flip.from(state, {
          ease: "power4.inOut",
          duration: 0.8,
          stagger: 0.1,
          absolute: true,
          reversed: true,
        });
      }, "galeryReveal")
      .addLabel("flipDone");
  }, [sequenceAnimation]);
  return (
    <div
      id="imgs"
      className="z-2 fixed w-screen h-screen inset-0 flex items-center justify-center"
    >
      <img
        src={img1}
        alt=""
        className="absolute w-full h-full inset-0 object-cover object-bottom "
      />
      <img
        src={img2}
        alt=""
        className="absolute w-full h-full inset-0 object-cover object-center"
      />
      <img
        src={img3}
        alt=""
        className="absolute w-full h-full inset-0 object-cover object-center"
      />
      <img
        src={img6}
        alt=""
        className="galeryImg absolute w-full h-full inset-0 object-cover object-center "
      />
      <img
        src={img4}
        alt=""
        className="galeryImg absolute w-full h-full inset-0 object-cover object-bottom "
      />
      <img
        src={img5}
        alt=""
        className="galeryImg absolute w-full h-full inset-0 object-cover object-center"
      />
    </div>
  );
}
