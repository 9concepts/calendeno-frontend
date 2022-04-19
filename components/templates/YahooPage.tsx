import React, { useState } from "react";
import { Layout } from "@components/layouts";
import { YahooLoginForm } from "@components/organisms/YahooLoginForm";
import { useCookies } from "@hooks/use-cookies";

export const YahooTemplate = (): JSX.Element => {
  const [cookies, setCookies] = useCookies("yahoo-cookies");

  const [calendar, setCalendar] = useState({} as CalendarInMonth);

  const getCalendar = async () => {
    await fetch("http://localhost:8080/api/alpha/calendars", {
      method: "POST",
      body: JSON.stringify({
        year: 2022,
        month: 3,
        cookies,
      }),
    })
      .then(async (response) => {
        const calendarInMonth = await response.json();
        setCalendar(calendarInMonth);

        console.log(calendarInMonth);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <div>
        <YahooLoginForm />
        <button onClick={getCalendar}>get</button>
        {calendar.items &&
          calendar.items.map((cal) => {
            return (
              <div key={cal.date}>
                <div>{cal.date}</div>
                <ul>
                  {cal.events.map((event) => {
                    return <li key={event.title}>{event.title}</li>;
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};
