import Navbar from "../components/Navbar";

export default function Crew() {
  return (
    <div
      className="bg-[url('/assets/crew/background-crew-mobile.jpg')]
                 md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
                 lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]
                 bg-cover bg-center min-h-screen w-full text-white"
    >
      <Navbar />

      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-10 lg:pt-32 max-w-6xl mx-auto">
        {/* LEFT: Text content */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="uppercase text-lg md:text-2xl font-barlow-condensed tracking-widest text-[#D0D6F9] mb-6">
            <span className="text-white/25 mr-2">02</span> Meet your crew
          </h2>

          <h3 className="uppercase text-2xl md:text-3xl font-bellefair text-white/50 mb-2">
            Commander
          </h3>
          <h1 className="uppercase text-4xl md:text-5xl font-bellefair mb-6">
            Douglas Hurley
          </h1>

          <p className="text-[#D0D6F9] font-barlow leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.
          </p>

          {/* Crew navigation dots */}
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white"></button>
          </div>
        </div>

        {/* RIGHT: Crew image */}
        <div className="flex justify-center items-center flex-1 mb-10 lg:mb-0">
          <img
            src="/assets/crew/image-douglas-hurley.png"
            alt="Douglas Hurley"
            className="h-72 md:h-96 lg:h-[600px] object-contain"
          />
        </div>
      </main>
    </div>
  );
}
