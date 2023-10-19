import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = fetch("https://api.adviceslip.com/advice");
    const data = await (await res).json();
    setAdvice(data.slip.advice);
  }
  return (
    <div>
      <button onClick={getAdvice}>Press for Advice </button>
      <h1>{advice}</h1>
    </div>
  );
}
