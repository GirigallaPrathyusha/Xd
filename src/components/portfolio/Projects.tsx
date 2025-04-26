
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A web application built with React and Node.js",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive website",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="bg-black/20 border-none">
            <CardHeader>
              <CardTitle className="text-[#9b87f5]">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
