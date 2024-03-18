'use client';
import { bookingInfoAtom } from '@/state/atoms';
import { useAtom } from 'jotai';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingOptions = () => {
  const [bookingInfo, setBookingInfo] = useAtom(bookingInfoAtom)

  return (
    <div>
      <p className='font-bold text-xl'>
        Book a Court
      </p>
      <p className='mt-6 text-md'>
        Location
      </p>
      <div className='mt-1'>
        <Select onValueChange={(value) => setBookingInfo({ ...bookingInfo, location: value })}>
          <SelectTrigger className="lg:w-[300px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent defaultValue={bookingInfo.location || 'singapore'}>
            <SelectItem value="singapore">Singapore</SelectItem>
            <SelectItem value="brazil">Brazil</SelectItem>
            <SelectItem value="portugal">Portugal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <p className='mt-4 text-md'>
        Duration
      </p>
      <div className='mt-1'>
        <Select onValueChange={(value) => setBookingInfo({ ...bookingInfo, duration: value })}>
          <SelectTrigger className="lg:w-[300px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent defaultValue={bookingInfo.duration || '30'}>
            <SelectItem value="30">30 min</SelectItem>
            <SelectItem value="60">1 hour</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default BookingOptions