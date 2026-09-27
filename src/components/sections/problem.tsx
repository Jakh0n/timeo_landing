import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Set the requirement",
    description:
      "Pick a branch and say how many people you need for weekday and weekend, day and night.",
    icon: Brain,
  },
  {
    title: "Share one link",
    description:
      "Staff open it with no account, enter their name and employee ID, and mark when they can work.",
    icon: Zap,
  },
  {
    title: "Confirm the schedule",
    description:
      "Generate the week, adjust it, and confirm. Staff use the same link to see their shifts.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="How it works"
      subtitle="Three steps to next week’s rota"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
