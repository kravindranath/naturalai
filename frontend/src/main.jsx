import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

// Optional: Add any design token overrides in the second argument
const system = createSystem(defaultConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
