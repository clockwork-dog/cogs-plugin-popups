import {
  useCogsConnection,
  useCogsEvent,
  useWhenShowReset,
} from "@clockworkdog/cogs-client-react";
import { CogsConnectionOpenEvent } from "@clockworkdog/cogs-client";
import { useEffect, useState } from "react";
import "./App.css";
import manifest from "./cogs-plugin-manifest.js";

export default function MediaPlayer() {
  const connection = useCogsConnection<typeof manifest>();

  const [message, setMessage] = useState<string>("");

  // Start with popup hidden
  useEffect(() => {
    const listener: (
      event: CogsConnectionOpenEvent & {
        _cogsConnectionEventType: "open";
      }
    ) => void = () => connection.setPluginWindowVisible(false);

    connection.addEventListener("open", listener);

    return () => {
      connection.removeEventListener("open", listener);
    };
  }, [connection]);

  // Hide popup on show reset
  useWhenShowReset(connection, () => {
    connection.setPluginWindowVisible(false);
  });

  // Show popup when event is received
  useCogsEvent(connection, "Show Popup", (value) => {
    setMessage(value);

    // Force it to re-show on top of COGS by hiding and showing again
    connection.setPluginWindowVisible(false);

    setTimeout(() => {
      connection.setPluginWindowVisible(true);
    }, 100);
  });

  return (
    <div className="container">
      <div className="message">{message}</div>
      <button onClick={() => connection.setPluginWindowVisible(false)}>
        Close
      </button>
    </div>
  );
}
