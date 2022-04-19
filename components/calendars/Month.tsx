import { Day } from "@components/calendars/Day";

type Props = {
  calendar: CalendarInMonth;
};

export const Month = ({ calendar }: Props): JSX.Element => {
  return (
    <div className="flex">
      {calendar.items.map((cal) => {
        return <Day key={cal.date} date={cal.date} events={cal.events}></Day>;
      })}
    </div>
  );
};
