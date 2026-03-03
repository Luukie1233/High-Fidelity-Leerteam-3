import { createBrowserRouter } from "react-router";
import Home from "./screens/Home";
import KiesAttracties from "./screens/KiesAttracties";
import Busfaciliteiten from "./screens/Busfaciliteiten";
import JouwQRCode from "./screens/JouwQRCode";
import AttractieDetail from "./screens/AttractieDetail";
import Plattegrond from "./screens/Plattegrond";
import Busstatus from "./screens/Busstatus";
import BusHalteDetail from "./screens/BusHalteDetail";
import Nieuws from "./screens/Nieuws";
import NieuwsDetail from "./screens/NieuwsDetail";
import Feedback from "./screens/Feedback";
import Instellingen from "./screens/Instellingen";
import TaalKiezen from "./screens/TaalKiezen";
import Weergave from "./screens/Weergave";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/kies-attracties",
    Component: KiesAttracties,
  },
  {
    path: "/attractie/:id",
    Component: AttractieDetail,
  },
  {
    path: "/busfaciliteiten",
    Component: Busfaciliteiten,
  },
  {
    path: "/qr-code",
    Component: JouwQRCode,
  },
  {
    path: "/plattegrond",
    Component: Plattegrond,
  },
  {
    path: "/bushalte/:id",
    Component: BusHalteDetail,
  },
  {
    path: "/busstatus",
    Component: Busstatus,
  },
  {
    path: "/nieuws",
    Component: Nieuws,
  },
  {
    path: "/nieuws/:id",
    Component: NieuwsDetail,
  },
  {
    path: "/feedback",
    Component: Feedback,
  },
  {
    path: "/instellingen",
    Component: Instellingen,
  },
  {
    path: "/taal-kiezen",
    Component: TaalKiezen,
  },
  {
    path: "/weergave",
    Component: Weergave,
  },
]);