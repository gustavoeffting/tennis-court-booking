'use client'
import { Calendar } from "@/components/ui/calendar";
import { cn } from '@/lib/utils';
import { bookingInfoAtom } from '@/state/atoms';
import { useAtom } from 'jotai';

const PickingDate = () => {
  const [bookingInfo, setBookingInfo] = useAtom(bookingInfoAtom)
  const disabledDays = [{ before: new Date() }]

  return (
    <div>
      <p className='font-bold text-lg'>
        Pick a date and time
      </p>
      <Calendar
        mode="single"
        selected={bookingInfo.date}
        onSelect={(value) => setBookingInfo({ ...bookingInfo, date: value })}
        className="mt-3"
        required
        showOutsideDays={false}
        disabled={disabledDays}
        classNames={{
          head_cell: 'h-9 w-12 font-normal',
          cell: 'h-9 w-12 p-2 font-normal',
          day: cn(
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_selected: 'bg-custom-green text-white',
        }}
      />
    </div>
  )
}

export default PickingDate