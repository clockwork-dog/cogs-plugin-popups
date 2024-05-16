import { createRoot } from "react-dom/client";
import App from "./App";
import { CogsConnectionProvider } from "@clockworkdog/cogs-client-react";
import manifest from "./cogs-plugin-manifest.js";

function Root() {
  return (
    <CogsConnectionProvider manifest={manifest}>
      <App />
    </CogsConnectionProvider>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Root />);
