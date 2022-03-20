import React from 'react'
import './page1.css';
import Stepper from './stepper';

function page1() {
  return (
    <div className='main_1'>
        <div className='coloum'>
            <div className='section'>
                    <div className='title'>
                        <p>DESCRIPTION</p>
                    </div>

                    <div className='content'>
                        <p>There's one simple reason we call this our everyday
                           oxford; we wear them pretty much every single day</p>
                    </div>
            </div>
            <div className='section'>
                    <div className='title'>
                        <p>MATERIAL</p>
                    </div>

                    <div className='content'>
                        <p>Just the right amount of sturdy for year round wear, 
                            Soft to the touch but built for a decade of solid wear. 
                            Ondoed is a perfectly versatile fabric that looks 
                            just as good pressed as it does pulled of the back of a chair. 
                            While traditional cotton uses 25 percent. of the world's pesticides, 
                            our organic cotton doesn't 
                            use a drog A better shirt, responsibly built for the long haul.</p>
                    </div>
            </div>
            <div className='section'>
                    <div className='title'>
                        <p>GARMENT WEIGHT</p>
                    </div>

                    <div className='content'>
                        <p>Your daily driver, Burlier than the average button up.</p>
                    </div>
                    
            </div>
            <Stepper/>
            
        </div>

        <div className='coloum'>
            <div className='section'>
                <div className='title1'>
                    <p>SPECIFICATIONS</p>
                </div>

                <div className='content'>
                    <ul>
                        <li><p>6-ce 100% organic cotton.</p></li>
                        <li><p>Made from our burly rugby axford</p></li>
                        <li><p>Our signature Jack button down collar.</p></li>
                        <li><p>Single rounded chest pocket.</p></li>
                        <li><p>Double-needle felled construction throughout</p></li>
                        <li><p>Natural buttons</p></li>
                        <li><p>Lock-stitched buttons and buttonholes</p></li>
                        <li><p>Shorter length to be worn untucked.</p></li>
                        <li><p>Tailored fit and high armbole.</p></li>
                        <li><p>No pleats for easy ironing and clean lines.</p></li>
                        <li><p>Wash cold and tumble dry low.</p></li>
                        <li><p>Made in China.</p></li>
                        {/* <li></li> */}
                    </ul>
                </div>
            </div>
        </div>

        <div className='coloum'>
            <div className='section'>
                <div className='title'>
                    <p>ESSENTIAL</p>
                </div>

                <div className='content'>
                    <p>This product is a Taylor Stitch Essential that we aim to 
                        always keep in stock. Essentials are our tried and true products 
                        that we wear damn near everyday. If your size is currently out of 
                        stock, please submit your email address to the "Notify Me" tab, 
                        We restock Essentials regularly. In stock sizes are available for 
                        immediate shipping</p>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default page1