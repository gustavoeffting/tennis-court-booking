'use client';
import { bookingInfoAtom, userInfoAtom } from '@/state/atoms';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { UserData, UserSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from '@/components/FormField';

const Confirm = () => {
  const bookingInfo = useAtomValue(bookingInfoAtom)
  const setUserInfo = useSetAtom(userInfoAtom)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });

  useEffect(() => {
    if (!bookingInfo.location || !bookingInfo.duration || !bookingInfo.date || !bookingInfo.time) {
      router.push('/booking')
    }
  }, [])


  const onSubmit = async (data: UserData) => {
    setUserInfo(data)
    router.push('/success')
  }

  return (
    <div className='lg:container lg:mx-auto lg:m-5'>
      <div className='bg-white shadow-lg lg:rounded-lg overflow-hidden w-full'>
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 flex justify-center w-full lg:h-auto border-r border-gray-300">
            <div className='lg:w-2/3 w-full'>
              <p className="font-bold text-xl">Confirm your order:</p>
              <p className="mt-10">Location: {bookingInfo.location}</p>
              <p className="mt-5">Duration: {bookingInfo.duration}min</p>
              <p className="mt-5">Date: {bookingInfo.date && format(bookingInfo.date, 'EEEE, MMMM dd')}</p>
              <p className="mt-5">Time: {bookingInfo.time}</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                  type="text"
                  placeholder="Name"
                  name="name"
                  register={register}
                  error={errors.name}
                />
                <FormField
                  type="email"
                  placeholder="Email"
                  name="email"
                  register={register}
                  error={errors.email}
                />
                <button
                  className="custom-green font-bold h-14 w-full mt-4 bg-transparent border-custom-green hover:text-white hover:bg-custom-green active:bg-lime-500 py-2 px-4 border hover:border-transparent rounded"
                  type="submit"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm