import { createBrowserRouter } from "react-router-dom";
import Detail from "../Pages/Details/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Detail></Detail>,
  },
]);

export default router;
