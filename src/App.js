import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var bookType = {
    JavaSript: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      { name: "JS with Me", rating: "3.5/5" }
    ],
    Friction: [
      { name: "Harry Potter", rating: "4/5" },
      { name: "On the Beach", rating: "4.5/5" }
    ],
    Money: [
      { name: "Think and grow rich", rating: "4/5" },
      { name: "Rich Dad and poor dad", rating: "4.5/5" }
    ]
  };

  const [type, settype] = useState("Money");

  const clickHandler = (item) => {
    settype(item);
  };
  return (
    <div className="App">
      <h1>
        {" "}
        📚 Good <span style={{ color: "Green" }}>Book</span> Suggestion
      </h1>
      <p>
        <u>Here i suggest some good book which you may rafer</u>
      </p>
      <div>
        {Object.keys(bookType).map((items) => (
          <button
            onClick={() => clickHandler(items)}
            style={{
              cursor: "pointer",
              background: "Grey",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1.5px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {items}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul>
          {bookType[type].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: ".1rem grey solid",
                margin: "1rem",
                width: "80%",
                borderRadius: ".5rem"
              }}
            >
              {" "}
              <div>{book.name}</div>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
