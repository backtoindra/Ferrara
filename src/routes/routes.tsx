import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from '../components/Menu.tsx'
import Offline from "../components/Offline.tsx";


const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
            index: true,
            element: <Menu />,
          },
          {
            path: "offline",
            element: <Offline />,
          }
      ],
  },
]);

export default router
