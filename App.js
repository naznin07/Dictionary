import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
       <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://github.com/naznin07"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naznin Sultana
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/naznin07/Dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://dictionary10.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
