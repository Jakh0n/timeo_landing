import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { CalendarClock, Link2, ListChecks } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Set the requirement",
    content:
      "Pick a branch and say how many people you need for weekday and weekend, day and night.",
    image: "/dashboard.png",
    icon: <CalendarClock className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Share one link",
    content:
      "Staff open it with no account, enter their name and employee ID, and mark when they can work.",
    image: "/dashboard.png",
    icon: <Link2 className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Confirm the schedule",
    content:
      "Generate the week, adjust it, and confirm. Staff use the same link to see their shifts.",
    image: "/dashboard.png",
    icon: <ListChecks className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      subtitle="Three steps to next week’s rota"
    >
      <Features data={data} />
    </Section>
  );
}
