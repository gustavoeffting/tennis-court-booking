import { atom } from 'jotai';
import { BookingInfo, UserData } from '../types';

const bookingInfoAtom = atom<BookingInfo>({
  location: 'Singapore',
  duration: '30',
  date: new Date(),
  time: '',
})

const userInfoAtom = atom<UserData>({
  name: '',
  email: ''
})

export {
  bookingInfoAtom,
  userInfoAtom
}