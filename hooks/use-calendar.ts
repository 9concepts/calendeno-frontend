import useSWR from "swr";
import { useCookies } from "@hooks/use-cookies";

export function useCalendar() {
  const [cookies] = useCookies("yahoo-cookies");
  const fetcher = (url: string) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        year: 2022,
        month: 3,
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
