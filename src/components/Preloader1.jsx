import pre from '../assets/pre1.mp4'

const Preloader1 = () => {

  return (
    <div className='w-screen h-screen bg-[#0a192f] pt-[180px]'>
          <video className='mx-auto h-[200px] rounded-full' src={pre} autoPlay loop muted />
    </div>
 
  )
}

export default Preloader1;