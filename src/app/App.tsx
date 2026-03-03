import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./i18n/LanguageContext";
import "../styles/sliders.css";

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;