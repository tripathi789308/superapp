import "./App.css";
import { RouterProvider } from "react-router-dom";

import { router } from "./pages/routes/index";
import { Navbar } from "./components/Navbar";
import "./pages/homepage/index.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
