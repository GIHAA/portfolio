import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/cf25f5c1-e150-4b5e-9de6-29b032e09eee" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00dbfe] text-gray-300'>Contact</p>

            </div>
            <input className='text-black bg-[#ccd6f6] p-2 rounded-lg' type="text" placeholder='Name' name='name' required/>
            <input className='text-black my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' required/>
            <textarea className='text-black bg-[#ccd6f6] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='hover:text-black text-white border-2 hover:bg-[#00dbfe] hover:border-[#00dbfe] rounded-lg w-[100px]  px-4 py-3 my-8 mx-auto flex '>Submit</button>
        </form>
    </div>
  )
}

export default Contact