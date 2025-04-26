
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <Card className="bg-black/20 border-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Button variant="outline" className="w-full md:w-auto">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
