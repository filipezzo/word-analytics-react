import { useState } from "react";

function Textarea({ onUpdate }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const numberOfWords = newText
      .split(" ")
      .filter((word) => word !== "").length;

    onUpdate({
      numberOfWords,
      numberOfCharacters: newText.length,
      instagramChLeft: 280 - newText.length,
      facebookChLeft: 2200 - newText.length,
    });
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="textarea"
      placeholder="Enter your text"
    />
  );
}

export default Textarea;
