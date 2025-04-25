import React from "react";

const YesBabyComponent = ({ setDisplayYesBabyPage }) => {
  return (
    <div className="yesBabyContent">
      <div className="container">
        <h1 className="header_text">Knew you would say yes!</h1>
        <div className="gif_container">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif"
            alt="Super Cute GIF"
          />
        </div>
        <button
          className="no-button"
          onClick={() => setDisplayYesBabyPage(false)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default YesBabyComponent;
