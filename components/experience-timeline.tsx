import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle,
} from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Internship Software Developer",
    secondTitle: "At Primo World Co., Ltd.",
    description:
      "Worked on a product CRM system, designed and implemented a new feature and write unit tests and integration tests to ensure code quality.",
    from: new Date("2025-04-01"),
    to: new Date("2025-09-30"),
    variant: "default" as const,
  },
  // {
  //   title: "Beta Launch",
  //   description:
  //     "System stabilized and released to the first batch of 500 internal users.",
  //   from: new Date("2023-03-01"),
  //   to: new Date("2023-03-31"),
  //   variant: "default" as const,
  // },
];

const dateOptions = {
  year: "numeric",
  month: "long",
} as Intl.DateTimeFormatOptions;

export function ExperienceTimeline() {
  return (
    <Timeline orientation="vertical">
      {timelineData.map((item, idx) => (
        <TimelineItem key={idx} variant={item.variant}>
          <TimelineItemDate>
            {`${item.from.toLocaleDateString("en-GB", dateOptions)} - ${item.to.toLocaleDateString("en-GB", dateOptions)}`}
          </TimelineItemDate>
          <TimelineItemTitle>{item.title}</TimelineItemTitle>
          <TimelineItemDescription>{item.description}</TimelineItemDescription>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
