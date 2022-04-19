import { DailyEvent } from "./DailyEvent";

type Props = {
  date: string;
  events: CalendarInMonth["items"][number]["events"];
};

export const Day = ({ date, events }: Props): JSX.Element => {
  const day = new Date(date).getDate();
  return (
    <div className="border w-full h-24 md:h-64 overflow-scroll">
      <div className="text-center">{day}</div>

      {events.map((event) => (
        <div className="mb-1 text-xs" key={event.title}>
          <DailyEvent title={event.title}></DailyEvent>
        </div>
      ))}
    </div>
  );
};
