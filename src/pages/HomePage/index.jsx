import { Banner } from '../../components/Banner';
import { RoomList } from '../../components/RoomList';
import { RoomDetail } from '../../components/RoomDetail';
import { BookingForm } from '../../components/BookingForm';
import { Footer } from '../../components/Footer';
import { Room } from '../../components/Room';
import './style.css';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  return (
    <>
      <div className="container"></div>;
      <Banner />
      <RoomList />
      <RoomDetail />
      <BookingForm />
      <Footer />
      <Room />
    </>
  );
};
