import React from 'react'


const Navbar = () => {
  return (
   
        <div className='w-screen mx-auto h-20  bg-orange-300 flex justify-between items-center'>           
            <div className='p-5'>Todo List</div>
            <div className='p-1 mr-2 flex  gap-2'>
                <button className=' bg-white border-2 p-1.5  border-blue-500 text-gray-500 rounded-xl hover:bg-orange-500 hover:text-white transition ease-in-out duration-300'>LOG IN</button>
                <button className=' bg-white border-2 p-1.5  border-blue-500 text-gray-500 rounded-xl hover:bg-orange-500 hover:text-white transition ease-in-out duration-300'>SIGN UP</button>
            </div>
        </div>

  )
}

export default Navbar