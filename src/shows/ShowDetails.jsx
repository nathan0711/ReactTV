import React from 'react';
import "./shows.css"; // Assuming you have a shows.css for styling

/** Allows users to select a show from a list of available shows. */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="show-selection">
      {shows.map((show) => (
        <a
          key={show.name} // Using show.name as key as specified
          className="show"
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
