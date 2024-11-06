import Image from "next/image";
import bg from "../../../../public/background/Galaxy.jpg";
import Form from "@/components/contact/Form";
 
export default function Home() {
  return (
    <>
      <Image 
      src={bg} 
      alt="background-image" 
      priority sizes="100vw" 
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">

          <h1 className="text-accent font-semibold text-center text-4xl ">
          Connect with me!
          </h1>

          <p className="text-center font-light text-sm xs:text-base">
          Feel free to send me a message whether for work or collaboration, I'll try to respond as quick as I can!
          </p>

        </div>

        <Form/>

      </article>
    </>
  );
}





