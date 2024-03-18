'use client';
import { format } from 'date-fns';
import { bookingInfoAtom } from '@/state/atoms';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';

const availableTimes30 = ['10:00', '10:30', '11:00', '11:30', '13:00', '13:30']
const availableTimes60 = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00']

const PickingTime = () => {
  const [bookingInfo, setBookingInfo] = useAtom(bookingInfoAtom)
  const router = useRouter()

  const handleClick = (time: string) => {
    setBookingInfo({ ...bookingInfo, time })
    router.push('/confirm')
  }

  return (
    <div className='pt-12'>
      <p>{bookingInfo.date && format(bookingInfo.date, 'EEEE, MMMM dd')}</p>
      <div>
        {
          (bookingInfo.duration === '60' ? [...availableTimes60] : [...availableTimes30]).map(time => (
            <button
              className="custom-green font-bold h-14 w-full mt-4 bg-transparent border-custom-green hover:text-white hover:bg-custom-green active:bg-lime-500 py-2 px-4 border hover:border-transparent rounded"
              key={time}
              onClick={() => handleClick(time)}
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