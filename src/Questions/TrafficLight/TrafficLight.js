import React, { useEffect, useState } from "react";

// styles
import "./TrafficLight.css";

// config
import { config, LIGHTS } from "./constants";

function TrafficLight() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    scheduleTrafficLight(
      config[LIGHTS.RED].timeDuration,
      setCurrentLightAsYellow
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scheduleTrafficLight = (time, cb) => {
    return new Promise((resolve) => setTimeout(cb, time));
  };

  const setCurrentLightAsRed = async () => {
    setCurrentLight(config[LIGHTS.RED].color);

    scheduleTrafficLight(
      config[LIGHTS.RED].timeDuration,
      setCurrentLightAsYellow
    );
  };

  const setCurrentLightAsYellow = async () => {
    setCurrentLight(config[LIGHTS.YELLOW].color);
    scheduleTrafficLight(
      config[LIGHTS.YELLOW].timeDuration,
      setCurrentLightAsGreen
    );
  };

  const setCurrentLightAsGreen = async () => {
    setCurrentLight(config[LIGHTS.GREEN].color);

    scheduleTrafficLight(
      config[LIGHTS.GREEN].timeDuration,
      setCurrentLightAsRed
    );
  };

  return (
    <div className="traffic-light-alignment">
      <div className="traffic-light-container">
        <div
          className={`traffic-lights ${
            currentLight === LIGHTS.RED && config[LIGHTS.RED].color
          }`}
        ></div>
        <div
          className={`traffic-lights ${
            currentLight === LIGHTS.YELLOW && config[LIGHTS.YELLOW].color
          }`}
        ></div>
        <div
          className={`traffic-lights ${
            currentLight === LIGHTS.GREEN && config[LIGHTS.GREEN].color
          }`}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
