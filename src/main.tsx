import { createRoot } from "react-dom/client";
import { AppProvider } from "./components/AppEntry";
import "./index.css";

createRoot(document.getElementById("root")!).render(<AppProvider />);
