import Lottie from 'react-lottie';
import * as location from './107298-payment.json'
import pre from '../assets/pre.mp4'

const Preloader2 = () => {

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
   
    </div>
 
  )
}

export default Preloader2;