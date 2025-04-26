
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "SQL", "Git", "AWS"
  ];

  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <Card key={skill} className="bg-black/20 border-none">
            <CardContent className="p-4 text-center">
              <span className="text-[#9b87f5]">{skill}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
