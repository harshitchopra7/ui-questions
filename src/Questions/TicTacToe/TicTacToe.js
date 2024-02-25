import React, { useState } from "react";

// styles
import "./TicTacToe.css";

// components
import Tiles from "./Tiles/Tiles";
import WinModal from "./WinModal/WinModal";

// constants
import { userConfig, users } from "./constants";

// helper
import { isUser1, winningCombinations } from "./helper";

function TicTacToe() {
  const [currentUser, setCurrentUser] = useState(users.user1);
  const [tileValues, setTileValues] = useState(Array(9).fill());
  const [hasWon, setHasWon] = useState({
    player: "",
    hasWon: false,
  });

  const changeCurrentUser = () => {
    if (isUser1(currentUser)) {
      setCurrentUser(users.user2);
    } else {
      setCurrentUser(users.user1);
    }
  };

  const checkWin = (id, isUser1) => {
    const combination = winningCombinations[id];

    const tileValue = isUser1 ? userConfig.user1 : userConfig.user2;

    for (let i = 0; i < combination.length; i++) {
      if (
        tileValues[combination[i][0]] === tileValue &&
        tileValues[combination[i][1]] === tileValue &&
        tileValues[combination[i][2]] === tileValue
      ) {
        setHasWon({
          player: isUser1 ? users.user1 : users.user2,
          hasWon: true,
        });
        return;
      }
    }
  };

  const handleClick = (id) => {
    const isUser1 = currentUser === users.user1;
    const tileValue = isUser1 ? userConfig.user1 : userConfig.user2;

    tileValues[id] = tileValue;

    checkWin(id, isUser1);

    changeCurrentUser();
  };

  const closeModal = () => {
    setHasWon({
      player: "",
      hasWon: false,
    });

    setTileValues(Array(9).fill());

    setCurrentUser(users.user1);
  };

  return (
    <div className="tic-tac-toe-container">
      {hasWon.hasWon && (
        <WinModal wonPlayer={hasWon.player} closeModal={closeModal} />
      )}
      <div className="tic-tac-toe-tiles-container">
        {tileValues.map((val, id) => (
          <Tiles key={id} id={id} val={val} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
