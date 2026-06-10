import React from "react";
import ReactDOM from "react-dom/client";

// Static portfolio is served entirely from public/index.html.
// React mounts to a hidden #root and renders nothing.
const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<></>);
}
