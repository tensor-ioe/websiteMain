import React from 'react'
import { useEffect } from 'react'
import AboutImage from '../../images/assets/AboutImage.png'
import Team from './Team'
import TeamAlumni from './TeamAlumni'
// import FrequentQuestion from './FrequentQuestion'

//These are the comtents of heading and paragraphs
const whatistensor = 'We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla quidem pariatur nihil, maxime possimus dolorum beatae a ipsa quaerat eligendi nobis. Id voluptas nihil, repellat modi cum nulla eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit pariatur dicta expedita consequatur dolorum repudiandae, officia distinctio, consectetur quos repellat illo perspiciatis maiores, minus repellendus. Accusamus blanditiis laborum assumenda?We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla quidem pariatur nihil, maxime possimus dolorum beatae a ipsa quaerat eligendi nobis. Id voluptas nihil, repellat modi cum nulla eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit pariatur dicta expedita consequatur dolorum repudiandae, officia distinctio, consectetur quos repellat illo perspiciatis maiores, minus repellendus. Accusamus blanditiis laborum assumenda?';
const titlehead = 'We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla quidem pariatur nihil, maxime possimus dolorum beatae a ipsa quaerat eligendi nobis. Id voluptas nihil, repellat modi cum nulla eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit pariatur dicta expedita consequatur dolorum repudiandae, officia distinctio, consectetur quos repellat illo perspiciatis maiores, minus repellendus. Accusamus blanditiis laborum assumenda?';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="overflow-hidden relative">
        <div className="w-[100vw] px-5 xl:px-0 xl:w-width xl:mx-auto pt-10 mb-10 relative z-0">
          {/* blob-1 */}
          <div className="max-sm:w-[300px] max-sm:h-[300px] w-[400px] h-[400px] bg-[#90C3F6] absolute top-10 left-[-20%] max-md:left-[-15%] rounded-customborder animate-change"></div>
          {/* blob-2 */}
          <div className="max-sm:w-[300px] max-sm:h-[300px] w-[400px] h-[400px] bg-[#90C3F6] absolute lg:-bottom-[10px] bottom-[-10px] right-[-15%] rounded-customborder animate-change"></div>
          {/* Begining of About us page  */}
          <h1 className='text-4xl font-extrabold text-center mb-10 relative'>ABOUT US</h1>
          <div className='w-full relative flex items-center max-md:flex-col gap-10 mb-12'>
            <img className='w-1/3 max-md:w-1/2 md:h-[210px] lg:h-[240px] xl:h-[270px] rounded-2xl' src={AboutImage} alt="" />
            <div className='w-auto flex flex-col gap-5'>
              <h1 className='text-4xl max-md:text-center md:text-5xl font-medium'>What is <span className='text-[#1360A5]' >Tensor</span>?</h1>
              <p className='leading-7 max-md:px-5 text-justify'>{whatistensor}</p>
            </div>
          </div>
          <div className='w-full relative flex flex-row-reverse items-center max-md:flex-col gap-10 mb-12'>
            <img className='w-1/3 max-md:w-1/2 md:h-[210px] lg:h-[240px] xl:h-[270px] rounded-2xl' src={AboutImage} alt="" />
            <div className='w-auto flex flex-col gap-5'>
              <h1 className='text-4xl max-md:text-center md:text-5xl font-medium'>TITLE HEAD</h1>
              <p className='leading-7 max-md:px-5 text-justify'>{titlehead}</p>
            </div>
          </div>
          <h1 className="relative text-4xl md:text-5xl font-extrabold text-center mb-10">CURRENT TEAM</h1>
          <Team />

          <h1 className="relative text-4xl md:text-5xl font-extrabold text-center mb-10">ALUMNI</h1>
          <TeamAlumni />
        </div>
        {/* <h1 className=' z-0 text-6xl text-center font-AboutTeamFontWeight mb-10'>FREQUENT ASKED QUESTION</h1> */}
        {/* <FrequentQuestion></FrequentQuestion>  */}
      </div>
    </>
  )
}

export default About