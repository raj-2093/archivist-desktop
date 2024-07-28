import { createBrowserRouter } from "react-router-dom";

import React from "react";
import Layout from "./layouts/Layout";

export default function Routes() {
  let element = createBrowserRouter([{ path: "/", element: <Layout /> }]);
  return element;
}
