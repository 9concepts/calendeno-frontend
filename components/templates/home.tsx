import { Layout } from "@components/layouts";
import { Month } from "@components/calendars/Month";
import { useState } from "react";

export const HomeTemplate = (): JSX.Element => {
  const date = new Date();

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);

  const handleNextMonth = () => {
    if (month === 12) {
      setYear((currentYear) => currentYear + 1);
      setMonth(1);
    } else {
      setMonth((currentMonth) => currentMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear((currentYear) => currentYear - 1);
      setMonth(12);
    } else {
      setMonth((currentMonth) => currentMonth - 1);
    }
  };

  console.log(year, month);

  return (
    <Layout>
      <div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevMonth}
            className=" text-teal-600 hover:underline"
          >
            前の月
          </button>
          <button
            onClick={handleNextMonth}
            className=" text-teal-600 hover:underline"
          >
            次の月
          </button>
        </div>

        <Month year={year} month={month} />
      </div>
    </Layout>
  );
};
