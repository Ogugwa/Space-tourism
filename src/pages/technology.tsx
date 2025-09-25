import Navbar from "../components/Navbar";

export default function Technology() {
  return (
    <div
      className="bg-[url('/assets/technology/background-technology-mobile.jpg')]
                 md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
                 lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]
                 bg-cover bg-center min-h-screen w-full text-white"
    >
      <Navbar />

      <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 lg:pt-32 max-w-6xl mx-auto">
        {/* LEFT: Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-16 flex-1">
          {/* Numbered navigation */}
          <ul className="flex lg:flex-col gap-4">
            <li className="w-12 h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
              1
            </li>
            <li className="w-12 h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
              2
            </li>
            <li className="w-12 h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
              3
            </li>
          </ul>

          {/* Text */}
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="uppercase text-lg md:text-2xl font-barlow-condensed tracking-widest text-[#D0D6F9] mb-4">
              <span className="text-white/25 mr-2">03</span> Space launch 101
            </h2>

            <h3 className="uppercase text-sm md:text-lg font-barlow-condensed text-[#D0D6F9] mb-2">
              The terminology...
            </h3>
            <h1 className="uppercase text-3xl md:text-5xl font-bellefair mb-6">
              Launch Vehicle
            </h1>
            <p className="text-[#D0D6F9] font-barlow leading-relaxed">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
              carry a payload from Earth's surface to space, usually to Earth orbit or
              beyond. Our WEB-X carrier rocket is the most powerful in operation.
              Standing 150 metres tall, it's quite an awe-inspiring sight on the launch
              pad!
            </p>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center items-center flex-1 mt-10 lg:mt-0">
          {/* Show landscape on mobile/tablet, portrait on desktop */}
          <img
            src="/assets/technology/image-launch-vehicle-landscape.jpg"
            alt="Launch vehicle"
            className="block lg:hidden w-full h-auto"
          />
          <img
            src="/assets/technology/image-launch-vehicle-portrait.jpg"
            alt="Launch vehicle portrait"
            className="hidden lg:block h-[500px] object-contain"
          />
        </div>
      </main>
    </div>
  );
}
