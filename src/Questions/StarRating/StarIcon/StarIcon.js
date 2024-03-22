import React from "react";

function StarIcon({ starId, handleClick, selectedStarId }) {
  const addStarIconClass = () => (starId <= selectedStarId ? "yellow" : "");

  return (
    <div onClick={() => handleClick(starId)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        id="star"
      >
        <path
          d="M92.3 38.6 64 34.9 51.8 9.1c-.7-1.5-2.9-1.5-3.6 0L36 34.9 7.7 38.6c-1.7.2-2.3 2.2-1.1 3.4l20.7 19.6-5.2 28.1c-.3 1.6 1.4 2.9 2.9 2.1l25-13.6 25 13.6c1.5.8 3.2-.5 2.9-2.1l-5.2-28.1L93.4 42c1.2-1.2.5-3.2-1.1-3.4zM69.1 59.5c-.5.5-.7 1.1-.6 1.8l4.7 25L51 74.1c-.3-.2-.6-.2-1-.2-.3 0-.7.1-1 .2L26.8 86.3l4.7-25c.1-.7-.1-1.3-.6-1.8L12.4 42l25.2-3.3c.7-.1 1.3-.5 1.6-1.1l10.8-23 10.9 22.9c.3.6.9 1 1.5 1.1L87.6 42 69.1 59.5z"
          fill={addStarIconClass()}
        ></path>
        <path
          fill="#00F"
          d="M1084-370v1684H-700V-370h1784m8-8H-708v1700h1800V-378z"
        ></path>
      </svg>
    </div>
  );
}

export default StarIcon;
