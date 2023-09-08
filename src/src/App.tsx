import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Deck from "src/components/Deck";
import ThemeProvider from "src/ThemeProvider";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Deck />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}
export default App;