import App from "./Components/Dashborad/";
import PracticeHooks from "./Components/Hooks/PracticeHooks";
import PracticeProbs from "./Components/Probs/PracticeProbs";
import Viewsignleuser from "./Components/API/viewsingleuser";
// import Practice from './Practice';
import { createBrowserRouter } from "react-router-dom";
import FetchMethod from "./Components/API/FetchMethod";
const value = "Junaid";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/PracticeHooks",
    element: <PracticeHooks />,
  },
  {
    path: "/PracticeProbs",
    element: <PracticeProbs junaid={value} />,
  },
  {
    path: "/FetchMethod/",
    element: <FetchMethod />,
  },
  {
    path: "/user/:id",
    element: <Viewsignleuser />,
  },
]);

export default appRouter;
