import Wrapper from "../shared/Wrapper";
import HeroPoster from "../../../assets/Images/right-image.png"
import Image from "next/image";


const Hero = () => {
    return (
      <section>
        <Wrapper>
          <div className="flex flex-col mt-6 md:flex-row items-center">
            {/* left side */}
            <div className="flex-1">
              <h1>
                An Industrial Take on Streetwear
              </h1>
              <p className="mt-6 sm:text-1xl text-xl text-slate-700 max-w-lg">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </p>
              
              
            </div>
            {/* Right side */}
            <div className="flex-1">
            <Image src={HeroPoster} alt="hero image" height={800} width={600} /> 
            </div>
          </div>
        </Wrapper>
      </section>
    );
  };
  
  export default Hero;
