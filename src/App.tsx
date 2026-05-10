import { useRef } from "react";
import Revealer from "./components/Revealer";
import Imgs from "./components/Imgs.tsx";
import Nav from "./components/Nav";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import cover1 from "./assets/imgs/coverImg.jpg";
// import cover2 from "./assets/imgs/coverImg2.jpg";

function App() {
  const mainTlRef = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    mainTlRef.current = gsap.timeline({ force3D: true });
  }, []);
  return (
    <>
      <Revealer mainTl={mainTlRef} />
      <Nav />
      <Imgs mainTl={mainTlRef} />
    </>
  );
}

export default App;
