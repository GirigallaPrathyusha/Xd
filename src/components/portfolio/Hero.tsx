
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-[#9b87f5]">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer
        </p>
        <div className="flex gap-4">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Download CV
          </Button>
          <Button variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/placeholder.svg"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover border-4 border-[#9b87f5]"
        />
      </div>
    </section>
  );
};

export default Hero;
