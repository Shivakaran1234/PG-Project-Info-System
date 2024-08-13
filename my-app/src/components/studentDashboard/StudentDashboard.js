// StudentDashboard.js
import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    const fetchCirculars = async () => {
      const response = await fetch('/api/student-circulars');
      if (response.ok) {
        const data = await response.json();
        setCirculars(data);
      } else {
        console.error('Failed to fetch circulars');
      }
    };

    fetchCirculars();
  }, []);

  return (
    <div>
      <ul>
        {circulars.map((circular) => (
          <li key={circular._id}>
            <h2>{circular.title}</h2>
            <p>{circular.content}</p>
          </li>
        ))}
      </ul>
      <h2>Reviews</h2>
      <p>Bring all the contents</p>

    </div>
  );
};

export default StudentDashboard;
