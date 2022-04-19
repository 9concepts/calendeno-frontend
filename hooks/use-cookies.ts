import { useState, Dispatch, SetStateAction } from "react";

const isNotExpired = (cookie: Cookie) => {
  // NOTE: cookie.expires is millisecond.
  return new Date().getTime() < cookie.expires * 1000;
};

export const useCookies = (
  key: string
): [Cookie[], Dispatch<SetStateAction<Cookie[]>>] => {
  const [cookies, setCookies] = useState<Cookie[]>(() => {
    const isBrowser = typeof localStorage !== "undefined";

    if (!isBrowser) return [];

    const value = localStorage.getItem(key);

    if (value) {
      const cookies = JSON.parse(value);
      const allCookiesAreNotExpired = cookies.every(isNotExpired);

      return allCookiesAreNotExpired ? cookies : [];
    } else {
      return [];
    }
  });

  return [cookies, setCookies];
};
