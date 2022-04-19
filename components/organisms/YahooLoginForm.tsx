import React, { useState } from "react";
import { useWebSocket } from "@hooks/use-web-socket";
import { Input } from "@components/atoms/Input";
import { SubmitButton } from "@components/atoms/SubmitButton";
import { useCookies } from "@hooks/use-cookies";

export const YahooLoginForm = (): JSX.Element => {
  const [isSMSSent, setIsSMSSent] = useState(false);
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("");
  const [, setCookies] = useCookies("yahoo-cookies");

  const socket = useWebSocket("ws://localhost:8080/api/alpha/sessions/new", {
    onmessage: (event) => {
      console.log(event.data);

      const responseJSON = JSON.parse(event.data);
      if (responseJSON.type === "cookies") {
        setCookies(responseJSON.message);

        localStorage.setItem(
          "yahoo-cookies",
          JSON.stringify(responseJSON.message)
        );
      }
    },
  });

  const userIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setUserId(newValue);
  };

  const codeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setCode(newValue);
  };

  const sendSms = () => {
    socket?.send(JSON.stringify({ action: "userid", message: userId }));
    setIsSMSSent(true);
  };

  const submitCode = () => {
    socket?.send(JSON.stringify({ action: "code", message: code }));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
      {!isSMSSent && (
        <div>
          <Input
            type="text"
            name="userid"
            value={userId}
            placeholder={`ID/携帯電話番号/メールアドレス`}
            onChange={(event) => userIdChange(event)}
          />
          <div className="flex justify-center pt-6">
            <SubmitButton onClick={sendSms}>次へ</SubmitButton>
          </div>
        </div>
      )}
      {isSMSSent && (
        <div>
          <div>
            <span onClick={() => setIsSMSSent(false)}>{`戻る`}</span>
          </div>
          {userId}に届いた確認コードを入力してください。
          <Input
            type="text"
            name="verification-code"
            value={code}
            placeholder={`確認コード`}
            onChange={(event) => codeChange(event)}
          />
          <div className="flex justify-center pt-6">
            <SubmitButton onClick={submitCode}>送信</SubmitButton>
          </div>
        </div>
      )}
    </div>
  );
};
