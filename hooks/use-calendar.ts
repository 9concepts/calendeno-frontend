import useSWR from "swr";
import { useCookies } from "@hooks/use-cookies";

export function useCalendar(year: number, month: number) {
  const [cookies] = useCookies("yahoo-cookies");
  const fetcher = (url: string) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        year,
        month,
        cookies,
      }),
    }).then((res) => res.json());

  const { data, error } = useSWR<CalendarInMonth>(
    "http://localhost:8080/api/alpha/calendars",
    fetcher
  );

  return {
    calendar: data,
    isLoading: !error && !data,
    error,
  };
}
