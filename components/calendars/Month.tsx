import { Week } from "@components/calendars/Week";
import { useCalendar } from "@hooks/use-calendar";

type Props = {
  year: number;
  month: number;
  // calendar: CalendarInMonth;
};

export const Month = ({ year, month }: Props): JSX.Element => {
  const { calendar, isLoading, error } = useCalendar(year, month);
  // NOTE: 日曜はじまり、7日ごとに分ける。
  const weeks: CalendarInMonth["items"][] = [];
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
  let currentWeekNum = 0;

  if (!calendar) return <div>loading...</div>;

  calendar.items.forEach((dayEvent) => {
    if (weeks[currentWeekNum] === undefined) weeks[currentWeekNum] = [];

    weeks[currentWeekNum].push(dayEvent);

    if (new Date(dayEvent.date).getDay() === 6) currentWeekNum++;
  });

  console.log(calendar, isLoading, error);

  const currentDate = new Date(calendar.items[0].date);

  return (
    <div className="md:w-6xl w-screen">
      <h1 className="pt-4 pb-4">
        {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
      </h1>
      {isLoading && <div>loading...</div>}
      {error && <div>Sorry, some errors occured</div>}

      <div className="grid grid-cols-7">
        {weekDays.map((weekDay) => (
          <div key={weekDay} className="w-full text-center">
            {weekDay}
          </div>
        ))}
      </div>
      {weeks.map((weeklyCalendar, index) => {
        return (
          <div key={`weekly-${index}`}>
            <Week dailyEvents={weeklyCalendar} />
          </div>
        );
      })}
    </div>
  );
};
