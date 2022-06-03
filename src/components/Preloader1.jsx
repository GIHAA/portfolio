import Lottie from 'react-lottie';
import * as location from './intro.json'
import pre from '../assets/pre.mp4'

const Preloader1 = () => {

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='w-full h-screen bg-[#0a192f] pt-[180px]'>
          <video className='mx-auto h-[200px] rounded-full' src={pre} autoPlay loop muted />
    </div>
 
  )
}

export default Preloader1;