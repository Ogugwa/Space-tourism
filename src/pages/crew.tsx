import Navbar from "../components/Navbar";
export default function Crew(){
    return(
        <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('/assets/destination/background-destination-tablet-jpg')]
        lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]
        bg-cover bg-center min-h-screen w-full">
            <Navbar/>
            <main>
                <h1>This is the Crew Page</h1>
            </main>
        </div>
    );
}