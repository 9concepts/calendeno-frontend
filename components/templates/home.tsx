import { Layout } from "@components/layouts";
import { Month } from "@components/calendars/Month";
import { useCalendar } from "@hooks/use-calendar";

export const HomeTemplate = (): JSX.Element => {
  const { calendar, isLoading, error } = useCalendar();

  console.log(calendar);

  return (
    <Layout>
      <div>
        <h1 role="heading" className="text-3xl font-bold underline">
          Hello
        </h1>

        {calendar?.items && <Month calendar={calendar} />}
      </div>
    </Layout>
  );
};
