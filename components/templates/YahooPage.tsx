import { useEffect, useState } from "react";

export const YahooTemplate = (): JSX.Element => {
  const isBrowser = typeof window !== "undefined";

  let socket: WebSocket | null = null;

  useEffect(() => {
    if (isBrowser)
      socket = new WebSocket("ws://localhost:8080/api/alpha/sessions/new");

    if (socket) {
      socket.onopen = () => {
        console.log("hi");
      };
    }
  }, []);

  const [code, setCode] = useState("");

  const handleCodeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCode(event.currentTarget.value);

    console.log(code);
  };

  return (
    <div>
      <button className="bg-gray-500">send sms</button>
      <div>
        <input
          type="text"
          name="verification-code"
          value={code}
          onChange={(event) => handleCodeInputChange(event)}
        />
        <button className="bg-gray-500">send code</button>
      </div>
    </div>
  );
};
