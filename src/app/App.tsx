import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./i18n/LanguageContext";
import { PlannerProvider } from "./planner/PlannerContext";
import "../styles/sliders.css";

function App() {
  return (
    <LanguageProvider>
      <PlannerProvider>
        <RouterProvider router={router} />
      </PlannerProvider>
    </LanguageProvider>
  );
}

export default App;