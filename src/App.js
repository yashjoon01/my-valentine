import "./App.css";
import YesBabyComponent from "./YesBabyComponent";
import "./YesBabyComponent.css";
import { useState, useRef, useEffect } from "react";

const messages = [
  "No",
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

function App() {
  const [displayYesBabyPage, setDisplayYesBabyPage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const yesButtonRef = useRef(null);

  const noButtonLabel = messages[messageIndex];

  function handleNoClick() {
    setMessageIndex((messageIndex) => (messageIndex + 1) % messages.length);
    const yesButton = yesButtonRef.current;
    if (yesButton) {
      const currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
      );
      yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return displayYesBabyPage === false ? (
    <div className="mainPageBody">
      <div className="container">
        <h1>Will you be my Valentine?</h1>
        <div className="buttons">
          <button
            ref={yesButtonRef}
            className="yes-button"
            onClick={() => {
              setDisplayYesBabyPage(true);
            }}
          >
            Yes
          </button>
          <button className="no-button" onClick={handleNoClick}>
            {noButtonLabel}
          </button>
        </div>
        <div className="gif_container">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
            alt="Cute GIF"
          />
        </div>
      </div>
    </div>
  ) : (
    <YesBabyComponent setDisplayYesBabyPage={setDisplayYesBabyPage} />
  );
}

export default App;
