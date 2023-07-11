import React from 'react'
import pic1 from './assets/pic-1.png'
import pic2 from './assets/pic-2.png'
import pic3 from './assets/pic-3.png'
import pic4 from './assets/pic-4.png'

import sideimg1 from './assets/sideImg-1.png'
import sideimg2 from './assets/sideImg-2.png'
import sideimg3 from './assets/sideImg-3.png'
import sideimg4 from './assets/sideImg-4.png'

const Gallery = () => {
  return (
<div class="container">
            Hello World
            <div class="heading">
                <div class="rectangle1"> </div>
                <div class="stories"> LATEST STORIES </div>
                <div class="rectangle2"> </div>
            </div>

            <div class="section-2">
                <div class="rect"></div>

            <div class="side-bar">
                <div class="head-1">
                    <h1>TOP PICKS</h1>
                </div>
                <div class="rectangle-3">
                    <div class="sidebar-img">
                        <img src={sideimg1} alt="vr-img"/>
                    </div>
                    <div class="sidebar-content">
                        <div class="content-heading">
                            <div class="rec-1"></div> 
                            <h1>FUTURE</h1>
                            <div class="rec-2"></div> 
                        </div>
                        <p>Self driven cars may be the future of transportation in coming years.</p>
                    </div>
                </div>

                <div class="rectangle-3">
                    <div class="sidebar-img">
                        <img src={sideimg2} alt="vr-img"/>
                    </div>
                    <div class="sidebar-content">
                        <div class="content-heading">
                            <div class="rec-1"></div> 
                            <h1>ANIMALS</h1>
                            <div class="rec-2"></div> 
                        </div>
                        <p>From sloths,bisons,yound mammoths, here is what....</p>
                    </div>
                </div>

                <div class="rectangle-3">
                    <div class="sidebar-img">
                        <img src={sideimg3} alt="vr-img"/>
                    </div>
                    <div class="sidebar-content">
                        <div class="content-heading">
                            <div class="rec-1"></div> 
                            <h1>COVID-19</h1>
                            <div class="rec-2"></div> 
                        </div>
                        <p>From lions and tigers to big hairy armadillos, a growing number.</p>
                    </div>
                </div>

                <div class="rectangle-3">
                    <div class="sidebar-img">
                        <img src={sideimg4} alt="vr-img"/>
                    </div>
                    <div class="sidebar-content">
                        <div class="content-heading">
                            <div class="rec-1"></div> 
                            <h1>WEAPONS</h1>
                            <div class="rec-2"></div> 
                        </div>
                        <p>From Seals to Marcos ,Why most of the special forces use.</p>
                    </div>
                </div>
                </div>
                <div class="right-bar">
                    <div class="sec-1">
                        <img src={pic1} alt="pic1"/>
                    </div>
                    <div class="sec-2">
                        <div class="sub-sec1">
                            <img src={pic2} alt="pic2"/>
                        </div>
                        <div class="sub-sec2">
                            <div class="pic-3"><img src={pic3} alt="pic3"/></div>
                            <div class="pic-4"><img src={pic4} alt="pic4"/></div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Gallery
