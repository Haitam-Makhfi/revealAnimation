import { useState, lazy, Suspense } from "react";
import Revealer from "./components/Revealer";
const Imgs = lazy(() => import("./components/Imgs.tsx"));
const Nav = lazy(() => import("./components/Nav.tsx"));
const Grid = lazy(() => import("./components/Grid.tsx"));
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(Flip, SplitText);
// import Imgs from "./components/Imgs.tsx";
// import Nav from "./components/Nav";
// import Grid from "./components/Grid.tsx";
// import cover1 from "./assets/imgs/coverImg.jpg";
// import cover2 from "./assets/imgs/coverImg2.jpg";
function App() {
  const [sequenceAnimation, setSequenceAnimation] =
    useState<gsap.core.Timeline | null>(null);
  const [showRevealer, setShowRevealer] = useState(true);
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
      <Suspense fallback={null}>
        {showRevealer && (
          <Revealer
            onDone={() => {
              setShowRevealer(false);
              console.log("Revealer deleted");
            }}
          />
        )}
        <Imgs sequenceAnimation={sequenceAnimation} />
        <Nav sequenceAnimation={sequenceAnimation} />
        <Grid sequenceAnimation={sequenceAnimation} />
      </Suspense>
    </>
  );
}
export default App;
