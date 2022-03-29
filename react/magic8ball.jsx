import React, { useState } from "react";

const Ex1 = () => {
  let [display, setDisplay] = useState("получи ответ");

  const ballData = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Most likely",
    "Outlook not so good",
    "Very doubtful",
  ];

  let magic = () => {
    setDisplay((display = ballData[Math.round(Math.random() * 20)]));
    console.log(Math.random * 20);
  };

  return (
    <div>
      <div>{display}</div>
      <button onClick={magic}>Потрясти шар</button>
    </div>
  );
};

export default Ex1;
