import "./App.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import TrafficLight from "./Questions/TrafficLight/TrafficLight";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Heyaaaaa!</div>,
    },
    {
      path: "/traffic-light",
      element: <TrafficLight />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
