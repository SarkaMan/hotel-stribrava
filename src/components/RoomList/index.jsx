import './style.css';

import { Room } from '../Room';

export const RoomList = ({ rooms, onSelect }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <Room
              key={room.id}
              id={room.id}
              title={room.name}
              price={room.price}
              unit={room.unit}
              image={`http://localhost:4000/assets/${room.image}`}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
