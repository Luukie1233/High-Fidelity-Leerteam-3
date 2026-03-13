import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./i18n/LanguageContext";
import { PlannerProvider } from "./planner/PlannerContext";
import { SavedQRCodesProvider } from "./planner/SavedQRCodesContext";
import { VoiceAssistantProvider } from "./planner/VoiceAssistantContext";
import "../styles/sliders.css";

function App() {
  return (
    <LanguageProvider>
      <PlannerProvider>
        <SavedQRCodesProvider>
          <VoiceAssistantProvider>
            <RouterProvider router={router} />
          </VoiceAssistantProvider>
        </SavedQRCodesProvider>
      </PlannerProvider>
    </LanguageProvider>
  );
}

export default App;