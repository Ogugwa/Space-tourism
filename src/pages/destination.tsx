import Navbar from "../components/Navbar";


export default function Destination(){
    return(
        <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('/assets/destination/background-destination-tablet-jpg')]
        lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]
        bg-cover bg-center min-h-screen w-full">
        <Navbar/>
        <main className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-20 px-6 py-10 lg:pt-40 max-w-6xl mx-auto">
        {/* Left: Planet image */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
        {/* Title */}
          <h2 className="uppercase text-lg md:text-2xl font-barlow-condensed tracking-widest text-[#D0D6F9] mb-6">
            <span className="text-white/25 mr-2">01</span> Pick your destination
          </h2>
          <img
            src="/assets/destination/image-moon.png"
            alt="Moon"
            className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
          />
        </div>

        {/* Right: Destination details */}
        <div className="text-center lg:text-left lg:w-1/2">
          

          {/* Tabs (Moon / Mars / Europa / Titan) */}
          <div className="flex justify-center lg:justify-start gap-6 uppercase text-[#D0D6F9] font-barlow-condensed tracking-widest mb-6">
            <button className="pb-2 border-b-2 border-white text-white">Moon</button>
            <button className="hover:text-white">Mars</button>
            <button className="hover:text-white">Europa</button>
            <button className="hover:text-white">Titan</button>
          </div>

          {/* Planet name */}
          <h1 className="font-bellefair text-6xl md:text-8xl uppercase mb-4">Moon</h1>

          {/* Description */}
          <p className="text-[#D0D6F9] font-barlow leading-relaxed mb-8">
            See our planet as you’ve never seen it before. A perfect relaxing trip
            away to help regain perspective and come back refreshed. While you’re
            there, take in some history by visiting the Luna 2 and Apollo 11 landing
            sites.
          </p>

          {/* Divider */}
          <hr className="border-white/20 mb-8" />

          {/* Stats */}
          <div className="flex flex-col md:flex-row md:justify-start gap-8 uppercase">
            <div>
              <p className="text-[#D0D6F9] text-sm tracking-widest mb-2">
                Avg. distance
              </p>
              <p className="text-2xl font-bellefair">384,400 km</p>
            </div>
            <div>
              <p className="text-[#D0D6F9] text-sm tracking-widest mb-2">
                Est. travel time
              </p>
              <p className="text-2xl font-bellefair">3 days</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
}