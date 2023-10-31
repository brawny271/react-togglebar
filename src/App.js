import React, { useState } from "react";
import Calander from "./Calander";
import Events from "./Events";

const App = () => {
  const [events, setEvents] = useState([
    { date: "2023-11-05", title: "Event 1" },
    { date: "2023-11-15", title: "Event 2" },
    // Add more events here
  ]);
  const [hoveredDate, setHoveredDate] = useState(null);

  const handleMouseEnter = (date) => {
    setHoveredDate(date);
  };

  return (
    <div>
      <Calander events={events} />
      <Events events={events} hoveredDate={hoveredDate} />
    </div>
  );
};

export default App;
