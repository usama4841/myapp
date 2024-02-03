import React, { useState } from "react";

function Textform(props) {
  function handleupclick() {
    let newText = text.toUpperCase();
    setText(newText);
    console.log(newText);
  }

  function handleloclick() {
    let newText = text.toLowerCase();
    setText(newText);
    console.log(newText);
  }

  function handleTrimclick() {
    let newText = text.trim();
    setText(newText);
    console.log(newText);
  }

  function handleClearclick() {
    let newText = "";
    setText(newText);
    console.log(newText);
  }

  function handleonchange(event) {
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className={`form-floating my-4 text-${props.mode==='light'?'dark':'light'}`}>
        <h3>{props.heading}</h3>
        <textarea
          className="form-control my-2"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={handleonchange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleloclick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleTrimclick}>
          Trim The Text
        </button>
        <button className="btn btn-light mx-1" onClick={handleClearclick}>
          Clear The Text
        </button>
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <p>{text.split(" ").length} Words & {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
