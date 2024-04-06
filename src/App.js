import "./App.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import TrafficLight from "./Questions/TrafficLight/TrafficLight";
import TicTacToe from "./Questions/TicTacToe/TicTacToe";
import DigitalClock from "./Questions/DigitalClock/DigitalClock";
import StarRating from "./Questions/StarRating/StarRating";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    {
      path: "/star-rating",
      element: <StarRating />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
