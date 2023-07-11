import React from 'react'
import ImageSlider from './components/ImageSlider'

const HomePage = () => {
    const containerStyles = {
        height: '280px',
        width: '500px',
    }
  return (
    <div>
        <div>
            <ImageSlider/>
        </div>
    </div>
  )
}

export default HomePage
