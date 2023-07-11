import React, { useEffect, useState } from 'react'
import { slides } from './constants';
import '../App.css'
import NavBar from './NavBar';

const ImageSlider = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }


    useEffect(() =>{
        const timer = setTimeout(goToNext, 4000);
        return () => {
            clearTimeout(timer);
        }
    }, [currentIndex])


  return (
    <div className='slider'>
        {/* <div onClick={goToPrev} className='left'> Left </div>
        <div onClick={goToNext} className='right'> Right </div> */}
        <div className="navbar">
            <NavBar/>
        </div>
        <div className='slide' style={{backgroundImage:`url(${slides[currentIndex].imgurl})`}}>
            <p> {slides[currentIndex].desc} </p>
        </div>
    </div>
  )
}

export default ImageSlider
