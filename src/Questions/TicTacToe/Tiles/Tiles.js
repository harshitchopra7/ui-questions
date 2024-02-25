import React from "react";

// styles
import "./Tiles.css";

function Tiles({ id, val, handleClick }) {
  const onClick = () => {
    handleClick(id);
  };

  return (
    <div className="tic-tac-toe-tile" onClick={onClick}>
      {val}
    </div>
  );
}

export default Tiles;
