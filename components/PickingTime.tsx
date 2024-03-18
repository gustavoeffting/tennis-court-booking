'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { bookingInfoAtom } from '@/state/atoms';
import { useAtom } from 'jotai';

const availableTimes30 = ['10:00pm', '10:30pm', '11:00pm', '11:30pm', '13:00pm', '13:30pm']
const availableTimes60 = ['10:00pm', '11:00pm', '13:00pm', '14:00pm', '15:00pm', '16:00pm']

const PickingTime = () => {
  const [bookingInfo, setBookingInfo] = useAtom(bookingInfoAtom)

  return (
    <div className='pt-12'>
      <p>{bookingInfo.date && format(bookingInfo.date, 'EEEE, MMMM dd')}</p>
      <div>
        {
          (bookingInfo.duration === '30' ? [...availableTimes30] : [...availableTimes60]).map(time => (
            <button
              className="custom-green font-bold h-14 w-full mt-4 bg-transparent border-custom-green hover:text-white hover:bg-custom-green py-2 px-4 border hover:border-transparent rounded"
              key={time}
              onClick={() => setBookingInfo({ ...bookingInfo, time })}
            >
              {time}
            </button>
          ))

        }
      </div>
    </div >
  )
}

export default PickingTime