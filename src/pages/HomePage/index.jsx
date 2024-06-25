import { Banner } from '../../components/Banner';
import { RoomList } from '../../components/RoomList';
import { RoomDetail } from '../../components/RoomDetail';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';

import './style.css';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const result = await fetch('http://localhost:4000/api/rooms');

      const data = await result.json();
      setRooms(data.data);
    };

    fetchRooms();
  }, []);

  const room = rooms !== null ? rooms[selectedRoomId] : null;
  return (
    <>
      <div className="container"></div>;
      <Banner />
      <RoomList
        rooms={rooms}
        onSelect={(id) => {
          setSelectedRoomId(id);
        }}
      />
      {rooms !== null && selectedRoomId !== null && (
        <section className="light">
          <div className="container">
            <h2>
              Pokoj {room.name}, {room.price} kč za osobu na noc
            </h2>
            <div className="columns-2">
              <RoomDetail room={room} />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};
