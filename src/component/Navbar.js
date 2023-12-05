import React from 'react'


const Navbar = () => {
  return (
    <div>
        <div className='w-screen h-20 bg-orange-300 flex justify-between'>           
            <div className='p-5'>Todo List</div>
            <div className='p-1 mr-2 flex flex-col gap-2'>
                <button className=' bg-white border-2 p-1.5  border-blue-500 text-gray-500 rounded-xl hover:bg-orange-500 hover:text-white transition ease-in-out duration-300'>SIGN UP</button>
                <button className=' bg-white border-2 p-1.5  border-blue-500 text-gray-500 rounded-xl hover:bg-orange-500 hover:text-white transition ease-in-out duration-300'>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar