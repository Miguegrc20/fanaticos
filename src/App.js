import React, { useState } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fanaticos</h1>
      </header>
      <main>
        {!isLoggedIn ? (
          <Login onLogin={setIsLoggedIn} />
        ) : (
          <>
            <NewsList />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
