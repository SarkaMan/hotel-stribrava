import { useState } from 'react';
import './style.css';
import { useEffect } from 'react';
import { Room } from '../Room';

export const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const result = await fetch('http://localhost:4000/api/rooms');

      const data = await result.json();
      setRooms(data.data);
    };

    fetchRooms();
  }, []);

  console.log(rooms);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        {rooms.map((room) => (
          <Room
            key={room.name}
            name={room.name}
            cena={room.price}
            unit={room.unit}
            image={room.image}
          />
        ))}
      </div>
    </section>
  );
};
