import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../homepage";
import { FileManagerApp } from "@superapp/file-explorer-app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/file-manager",
    element: <FileManagerApp />,
  },
]);
