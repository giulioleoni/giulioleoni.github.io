import Image from "next/image";
import bg from "../../../../public/background/Galaxy.jpg";
import Propic from "../../../../public/background/Propic.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <Image 
      src={bg}
      priority sizes="100vw"  
      alt="background-image" 
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

      <Image 
      src={Propic} 
      alt="Profile-Pic" 
      className="object-contain h-64 w-64 flex flex-col align-middle items-center justify-center" />

      <div className="relative w-full h-auto flex flex-col items-center justify-center py-32">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-b text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Giulio Leoni</h1>
          <p className="font-light text-foreground text-ls">Hello and thanks for stopping by!</p>
          <p className="font-light text-foreground text-ls">My name is Giulio and I'm a game programmer from Italy</p>
        </div>
      </div>

      <AboutDetails />
      
    </>
  );
}





