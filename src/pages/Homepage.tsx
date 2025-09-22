import Navbar from "../components/Navbar";

export default function Homepage() {
    return(
        <div className="bg-[url('/assets/home/background-home-mobile.jpg')] 
                        md:bg-[url('/assets/home/background-home-tablet.jpg')] 
                        lg:bg-[url('/assets/home/background-home-desktop.jpg')] 
                        bg-cover bg-center min-h-screen w-full">
            <Navbar  />        
            <main className="flex flex-col p-4 w-full items-center justify-between gap-8 text-white md:mt-5 lg:flex-row lg:mt-10 lg:max-w-6xl lg:mx-auto lg:pt-40  ">
                <div className="font-normal flex flex-col text-center lg:text-left ">
                    <h2 className=" text-[#D0D6F9] tracking-[4px] font-barlow text-xl md:text-2xl">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="text-white text-[5rem] md:text-[7rem] lg:text-9xl leading-snug font-bellefair">SPACE</h1>
                    <p className="text-[#D0D6F9] font-barlow text-sm md:text-[1rem] lg:text-[18px] max-w-md md:max-w-lg lg:max-w-md">Let’s face it; if you want to go to space, you might as well genuinely go
                     to outer space and not hover kind of on the edge of it. Well sit back,
                      and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-32 h-32  text-xl  md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white flex items-center justify-center text-black md:text-2xl font-serif tracking-widest cursor-pointer relative hover:shadow-[0_0_0_60px_rgba(255,255,255,0.1)] transition-all duration-500">
                        EXPLORE
                    </div>
                </div>
            </main>
        </div>
    );
}
