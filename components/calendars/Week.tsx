import { Day } from "@components/calendars/Day";

type Props = {
  dailyEvents: CalendarInMonth["items"];
};

export const Week = ({ dailyEvents }: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-7">
      {dailyEvents.map((cal) => {
        const dayNum = new Date(cal.date).getDay();

        return (
          <div
            key={cal.date}
            style={{
              gridColumnStart: dayNum + 1,
            }}
          >
            <Day date={cal.date} events={cal.events}></Day>
          </div>
        );
      })}
    </div>
  );
};
