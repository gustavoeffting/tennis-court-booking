'use client';
import { useEffect } from "react";
import { userInfoAtom } from "@/state/atoms";
import { useAtomValue } from "jotai";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import CheckImg from './check.png'

const Success = () => {
  const userData = useAtomValue(userInfoAtom)
  const router = useRouter()

  useEffect(() => {
    if (!userData.name || !userData.email) {
      router.push('/booking')
    }
  }, [])

  return (
    <div className='lg:container lg:mx-auto lg:m-5'>
      <div className='bg-white shadow-lg lg:rounded-lg overflow-hidden w-full'>
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 flex justify-center w-full lg:h-auto border-r border-gray-300">
            <div>
              <div className='flex justify-center'>
                <Image alt="check" src={CheckImg} />
              </div>
              <p className="font-bold text-xl mt-10">Thank you for your order, {userData.name}!</p>
              <p className="mt-10">We will send you an email to {userData.email} with the details of your booking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success