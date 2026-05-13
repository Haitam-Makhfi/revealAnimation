import coverImg2 from "../assets/imgs/coverImg2.jpg";
export default function Grid() {
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
          <div id="location" className="w-1/2">
            DIVISION 4 studio riverston building -28 orchard lane n1 4dx
          </div>
          <div id="socials" className="w-1/2 flex flex-col">
            <span className="mb-1.5">let's connect</span>
            <span>linkedin</span>
            <span>instagram</span>
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
