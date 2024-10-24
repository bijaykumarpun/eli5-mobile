import HomePage from "@/components/page/HomePage";
import { useState } from "react";
import { Message } from "@/components/type/converstaion";

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(false);
  const conversations = {
    messages: [
      { id: "1", data: "Message1" },
      { id: "2", data: "Message2" },
      { id: "3", data: "Message3" },
      { id: "4", data: "Message4" },
      { id: "5", data: "Message5" },
    ],
  };
  return (
    <HomePage
      isLoading={isLoading}
      onPressSend={() => {
        setLoading(true);
      }}
      onTextChanged={(text) => {}}
      inputText=""
      converstaion={conversations}
    />
  );
}
