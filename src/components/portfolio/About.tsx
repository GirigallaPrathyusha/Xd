
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16" id="about">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <Card className="bg-black/20 border-none">
        <CardContent className="p-6">
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer with experience in building web applications
            using modern technologies. I love solving complex problems and creating intuitive
            user experiences.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
