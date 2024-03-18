import BookingOptions from "@/components/BookingOptions";
import PickingDate from "@/components/PickingDate";
import PickingTime from "@/components/PickingTime";

const Booking = () => {
  return (
    <div className='lg:container lg:mx-auto lg:m-5'>
      <div className='bg-white shadow-lg lg:rounded-lg overflow-hidden w-full'>
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 w-full lg:w-1/3 lg:h-auto border-r border-gray-300">
            <BookingOptions />
          </div>
          <div className="p-5 w-full lg:w-1/3 lg:h-auto">
            <PickingDate />
          </div>
          <div className="p-5 w-full lg:w-1/3 lg:h-auto">
            <PickingTime />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking