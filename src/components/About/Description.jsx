import React from 'react'
import AboutImage from '../../images/assests/AboutImage.png'

const Description = ({heading,paragraph , reverse=false}) => {
  return (
    <div className={`flex flex-col justify-center max-md:gap-4 my-20 sm:mx-20 md:flex-row md:${reverse?'flex-row-reverse':''}`}>
        <div className={`relative max-md:mx-auto h-AboutImageHeight w-1/2 md:w-1/3 rounded-2xl ${reverse?'md:ml-40':'md:mr-40'}`}>
          <img className='w-full h-AboutImageHeight rounded-2xl' src={AboutImage} alt="" />
          {/* <div class="absolute inset-0 bg-blue-500 opacity-50"></div> */}
        </div>

        <div className={`flex flex-col items-center md:w-3/12 `}>
            <h1 className='text-4xl md:text-6xl mb-8'>{heading}</h1>
            <p className='leading-7 mx-4'>{paragraph}</p>

        </div>
    </div>
  )
}

export default Description