import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/sliders.css";

export default function App() {
  return <RouterProvider router={router} />;
}