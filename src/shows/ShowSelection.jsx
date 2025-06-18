import React from 'react'; // Import React for JSX
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) { // Destructure props: shows and setSelectedShow
  return (
    <nav className="shows">
      {shows.map((show) => ( // Map over the 'shows' array to render each show
        <a
          key={show.name} // Use show.name as a unique key for each link
          className="show" // Apply the .show class from your CSS
          href="#" // Prevent default link behavior, handle with onClick
          onClick={(e) => {
            e.preventDefault(); // Stop the browser from navigating or reloading
            setSelectedShow(show); // Call the function passed from App to update the selected show
          }}
        >
          {show.name} {/* Display the name of the show */}
        </a>
      ))}
    </nav>
  );
}
