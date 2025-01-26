import {NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import placeHolderImage from "../../images/assets/PlaceHolderImage.jpeg"
import HomeTestimonialsTemplate from "./HomeTestimonialsTemplate"
import HomeSponsor from './HomeSponsor'

const Home = () => {
  useEffect(() => { // to scroll to the top of the page when this component is mounted
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden flex flex-col gap-7">
      <div className="homeinfo">
        <div className="w-full h-nonavbarheight flex items-center justify-center">
          <div className="w-full px-6 xl:px-0 md xl:w-width flex max-lg:flex-col-reverse max-lg:items-center gap-10">
            <div className="max-sm:w-[80vw] max-lg:w-[65vw] w-1/2 flex flex-col gap-4 justify-center">
              <h1 className="max-sm:text-3xl text-5xl font-extrabold">Tensor - <span className="text-blue-900">headline</span></h1>
              <div className="max-sm:text-sm text-base xl:text-lg">
                Welcome to Tensor IOE Thapathali,a community where innovation meets passion. Here, we are dedicated to empowering students with the skills and knowledge to excel in the dynamic field of data engineering. Our club brings together like-minded individuals who are eager to learn, explore and create.
              </div>
              <NavLink className='w-[100px] px-2 py-2 text-white bg-[#2176c0] rounded-lg' to={'/about'}>Learn More</NavLink>
            </div>
            <div className="max-sm:w-[75vw] max-lg:w-[57vw] w-1/2 flex items-center justify-center relative">
              <img className='w-full max-sm:h-[200px] h-[275px]' src={placeHolderImage} alt="placeholderimg" />
              {/* blob */}
              <div className="w-[500px] h-[500px] bg-[#90C3F6] absolute left-48 z-[-1] rounded-customborder animate-change"></div>
            </div>
          </div>
        </div>
        <div className='w-full h-[300px] bg-[#E0EDFA] flex items-center justify-center gap-12 max-md:gap-5 px-5 '>
          <img className='max-sm:w-[180px] md:w-[300px] xl:w-[400px] max-sm:h-[150px] h-[175px]' src={placeHolderImage} alt="placeholderimg" />
          <div>
            <h1 className='max-md:text-base md:text-xl text-4xl font-bold'>What is <span className='text-blue-900'>Tensor?</span></h1>
            <div className="max-md:w-full max-sm:text-xs md:text-sm md:w-[400px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores exercitationem eos molestiae cupiditate, ea facere impedit debitis delectus. Soluta eaque blanditiis sapiente asperiores. Illo dolore maiores quisquam tempore reiciendis.</div>
          </div>
        </div>
      </div>
      <HomeTestimonialsTemplate />
      <HomeSponsor />
    </div>
  )
}

export default Home