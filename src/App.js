import "./App.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import TrafficLight from "./Questions/TrafficLight/TrafficLight";
import TicTacToe from "./Questions/TicTacToe/TicTacToe";
import DigitalClock from "./Questions/DigitalClock/DigitalClock";

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
    {
      path: "/tic-tac-toe",
      element: <TicTacToe />,
    },
    {
      path: "/digital-clock",
      element: <DigitalClock />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
