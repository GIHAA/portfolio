import Lottie from 'react-lottie';
import * as location from './intro.json'

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
         <Lottie options={defaultOptions}
              height={300}
              width={300}/>

    </div>
 
  )
}

export default Preloader1;