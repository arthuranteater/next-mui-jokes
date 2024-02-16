"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Data } from "./types/Data";
import JokeDisplay from "./components/JokeDisplay";

export default function Home() {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState<Data>({
    loading: true,
    error: "",
    data: {
      id: 0,
      joke: "",
      punchLine: "",
    },
  });

  const api = "https://mwks-joke-service.azurewebsites.net/api/joke/random";

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    setShow(false);
    const res: any = await fetch(api);
    if (res.status === 200) {
      const json: any = await res.json();
      setResponse({ loading: false, error: "", data: json });
      return;
    }
    setResponse({
      loading: false,
      error: "error",
      data: { id: 0, joke: "", punchLine: "" },
    });
  }

  const { loading, error, data } = response;
  return (
    <main>
      <Navbar getJoke={getJoke} />
      <hr className="MuiDivider-root"></hr>
      <JokeDisplay response={response} setShow={setShow} show={show} />
    </main>
  );
}
