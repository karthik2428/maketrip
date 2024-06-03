import './Background.css'
import video1 from '../../assets/video1.mp4'
import building from '../../assets/building.jpg'
import pyramid from '../../assets/pyramid.jpeg'
import indiagate from '../../assets/indiagate.jpg'

const Background = ({playStatus,heroCount}) => {
  if (playStatus){
    return(
        <video className='background fade-in' src={video1} autoPlay muted loop ></video>
    )
  }
 else if(heroCount===0){
    return(
        <img className='background fade-in' src={building} alt='background' />
    )
  }
  else if(heroCount===1){
    return(
        <img className='background fade-in' src={indiagate} alt='background' />
    )
  }
  else if(heroCount===2){
    return(
        <img className='background fade-in' src={pyramid} alt='background' />
    )
  }
}

export default Background
