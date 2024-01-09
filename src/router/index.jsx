import App from "../App";

import {
    createBrowserRouter,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/tide-tackle/",
      element:   <App />,
    },
  ]);

export default router;