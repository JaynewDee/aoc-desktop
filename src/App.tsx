import { createSignal } from "solid-js";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import { Toolbar as AppToolbar } from './components/Toolbar';
import SiteIframe from "./components/Site";

function App() {
  const [year, setYear] = createSignal("2024");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name: name() }));
  // }

  return (
    <main class="container">
      <AppToolbar year={year} setYear={setYear} />
      <SiteIframe year={year} />
      HELLO
    </main>
  );
}

export default App;
