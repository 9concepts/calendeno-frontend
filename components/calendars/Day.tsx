import { DailyEvent } from "./DailyEvent";

type Props = {
  date: string;
  events: CalendarInMonth["items"][number]["events"];
};

export const Day = ({ date, events }: Props): JSX.Element => {
  return (
    <div className="border w-40 h-64 overflow-scroll">
      <div className="text-center">{date}</div>

      {events.map((event) => (
        <div className="mb-1" key={event.title}>
          <DailyEvent title={event.title}></DailyEvent>
        </div>
      ))}
    </div>
  );
};
