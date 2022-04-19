import { useEffect, useState } from "react";

type Options = {
  onmessage: (event: MessageEvent) => void;
};

export function useWebSocket(url: string, { onmessage }: Options) {
  const isBrowser = typeof window !== "undefined";
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (isBrowser) {
      setSocket(() => {
        const newSocket = new WebSocket(url);
        newSocket.onopen = () => {
          console.log("connected");
        };
        newSocket.onmessage = onmessage;
        newSocket.close = () => {
          console.log("disconnected");
        };
        return newSocket;
      });
    }

    return () => {
      socket?.close();
    };
  }, []);

  return socket;
}
