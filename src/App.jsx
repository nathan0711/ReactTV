import React, { useState } from 'react'; // Import useState hook
import ShowSelection from './shows/ShowSelection'; // Import ShowSelection component
import ShowDetails from './shows/ShowDetails';     // Import ShowDetails component
import initialShowsData from './shows/data';      // Import the show data

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  // State to hold all the show data
  const [shows, setShows] = useState(initialShowsData);
  // State to hold the currently selected show
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="App"> {/* It's good practice to wrap everything in a single div */}
      <header>
        <h1>React TV</h1> {/* Changed p to h1 for better semantic structure */}
        {/* Render ShowSelection and pass it the shows and the setSelectedShow function */}
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        {/* Render ShowDetails and pass it the currently selected show */}
        <ShowDetails show={selectedShow} />
      </main>
    </div>
  );
}
