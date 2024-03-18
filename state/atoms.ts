import { atom } from 'jotai';
import { BookingInfo } from '../types';

const bookingInfoAtom = atom<BookingInfo>({
  location: '',
  duration: '',
  date: new Date(),
  time: '10:00pm',
})

export {
  bookingInfoAtom
}