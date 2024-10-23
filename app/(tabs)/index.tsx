import HomePage from "@/components/page/HomePage";
import { useState } from "react";

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(false);
  return (
    <HomePage
      isLoading={isLoading}
      onPressSend={() => {
        setLoading(true);
      }}
    />
  );
}
