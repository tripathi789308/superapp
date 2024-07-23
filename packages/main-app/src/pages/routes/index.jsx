import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../homepage";
import { FileManagerApp } from "@superapp/file-explorer-app";
import { EMICalculator } from "@superapp/emi-calculator";
import { PaginationApp } from "@superapp/pagination";
import { PasswordGenerator } from "@superapp/password-generator";
import { SudokoApp } from "@superapp/sudoko";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/file-manager",
    element: <FileManagerApp />,
  },
  {
    path: "/emi-calculator",
    element: <EMICalculator />,
  },
  {
    path: "/pagination",
    element: <PaginationApp />,
  },
  {
    path: "/password-generator",
    element: <PasswordGenerator />,
  },
  {
    path: "/sudoko",
    element: <SudokoApp />,
  },
]);
