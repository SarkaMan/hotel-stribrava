import { BookingForm } from '../BookingForm';
import './style.css';

export const RoomDetail = ({ room }) => {
  return (
    <div className="column">
      <img src={`http://localhost:4000/assets/${room.image}`} />
      <p>{room.description}</p>
      <BookingForm cena={room.price} />
    </div>
  );
};
