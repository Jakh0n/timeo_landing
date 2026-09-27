import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Clock, Link2, SunMoon, ClipboardCheck } from "lucide-react";

const data = [
  {
    id: 1,
    title: "One link for the whole team",
    content: "No worker logins, no second link for the result.",
    image: "/dashboard.png",
    icon: <Link2 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Day and night, weekday and weekend",
    content:
      "Headcount is set per branch, not as a single weekly number.",
    image: "/dashboard.png",
    icon: <SunMoon className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Availability with real hours",
    content:
      "Staff choose the days, the shift, and the time range they can work.",
    image: "/dashboard.png",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Review before it is final",
    content:
      "Generate the schedule, change it, then confirm. Until you confirm, nothing is published.",
    image: "/dashboard.png",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      id="product"
      title="Product"
      subtitle="Built for the way a restaurant actually schedules"
    >
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
