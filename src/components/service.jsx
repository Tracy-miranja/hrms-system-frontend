import React from 'react'

function Service() {
  return (
    <div className=''>
    <div className='ml-[5%] mt-2 w-[90%]'>
         <div className='flex flex-col bg-blue-100 rounded-xl pt-6 justify-center'>
            <div className='flex flex-col items-center  p-4 gap-2 '>
                <div>
                <h1 className='font-semibold text-2xl'>What We Offer</h1>
                </div>
            
            <div className='flex justify-center bg-white rounded-full w-[80%] h-fit p-4 gap-8 text-xl'>
                <button className='font-semibold w-fit bg-blue-400 text-white border hover:bg-gray-400 rounded-full p-2 hover:text-black'>HRMS</button>
                <button className='font-semibold w-fit border hover:bg-blue-400 rounded-full p-2 hover:text-white'>ATS</button>
                <button className='font-semibold w-fit border hover:bg-blue-400 rounded-full p-2 hover:text-white'>Payroll</button>
                <button className='font-semibold w-fit border hover:bg-blue-400 rounded-full p-2 hover:text-white'>Recruitment</button>
                <button className='font-semibold w-fit border hover:bg-blue-400 rounded-full p-2 hover:text-white'>Time Management</button>
                <button className='font-semibold w-fit border hover:bg-blue-400 rounded-full p-2 hover:text-white'>Employee Benefits</button>
            </div>
            </div>
          <div className='flex bg-blue-100 justify-center'>
          <div className='flex flex-col gap-4 w-[50%] h-[40vh] p-8 justify-center'>
            <h1 className='font-bold text-2xl'>Compliant, Fast and Accurate <br />Global Payroll</h1>
            <p className='text-xl'>Easily manage employee data, automate processes,<br /> gain performance insights, boost employee engagement, and generate reports with a secure robust HRMS</p>
            <button className='w-fit p-2 bg-blue-400 rounded-full text-white border hover:bg-gray-400'>Learn More</button>
          </div>
          <div className='flex w-[50%] pb-4 '>
            <div className='flex bg-gray-300 w-[90%] rounded-2xl'></div>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Service