import { useState } from "react";
import Revealer from "./components/Revealer";
import Imgs from "./components/Imgs.tsx";
import Nav from "./components/Nav";
import Grid from "./components/Grid.tsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(Flip, SplitText);
// import cover1 from "./assets/imgs/coverImg.jpg";
// import cover2 from "./assets/imgs/coverImg2.jpg";

function App() {
  const [sequenceAnimation, setSequenceAnimation] =
    useState<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    console.log("Parent creating timeline");
    setSequenceAnimation(gsap.timeline({ force3D: true }));
    return () => {
      console.log("Parent killing timeline", !!sequenceAnimation);
      sequenceAnimation?.kill();
    };
  }, []);
  return (
    <>
      <Revealer sequenceAnimation={sequenceAnimation} />
      <Imgs sequenceAnimation={sequenceAnimation} />
      <Nav />
      <Grid sequenceAnimation={sequenceAnimation} />
    </>
  );
}

export default App;
