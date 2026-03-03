import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/sliders.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;