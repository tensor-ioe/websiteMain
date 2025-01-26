import galleries from "../../constants/gallery"
import { useState, useEffect } from "react"

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [overlay, setOverlay] = useState('hidden')
  const [gallery, setGallery] = useState(galleries[0]) // gallery is object containing keys : title, photos
  const [position, setPosition] = useState(0)

  const handleClickGallery = (item) => {
    setPosition(0)
    setOverlay('block')
    setGallery(item)
  }
  const handleLeft = () => {
    let no_of_photos = gallery.photos.length - 1
    position === 0 ? setPosition(no_of_photos)  : setPosition((prevPosition) => prevPosition - 1)
  }

  const handleRight = () => {
    let no_of_photos = gallery.photos.length - 1
    position === no_of_photos ? setPosition(0) : setPosition((prevPosition) => prevPosition + 1)
  }
  return (
    <div className="overflow-hidden relative">
      <div className="w-[100vw] px-5 xl:px-0 xl:w-width xl:mx-auto pt-10 mb-10 relative z-0">
        {/* blob-1 */}
        <div className="max-sm:w-[400px] max-sm:h-[400px] w-[500px] h-[500px] bg-[#90C3F6] absolute top-[-10%] right-[-20%] rounded-customborder animate-change"></div>
        {/* blob-2 */}
        <div className="max-sm:w-[400px] max-sm:h-[400px] w-[500px] h-[500px] bg-[#90C3F6] absolute bottom-[-10px] left-[-25%] rounded-customborder animate-change"></div>
        <h1 className='text-4xl font-extrabold text-center mb-7 relative'>GALLERY</h1>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-10">
          {galleries.map((item, index) => {
            return (
              <div key={index} onClick={() => handleClickGallery(item)} className="group w-[300px] xl:w-[350px] aspect-[4/3] rounded-xl shadow-boxShadow relative overflow-hidden hover:cursor-pointer">
                <img className='w-full h-full object-fill rounded-xl transition-all group-hover:scale-110' src={item.photos[0]} alt="memories" />
                <div className="w-full h-full rounded-xl bg-[#1360A5AB] grid place-content-center text-3xl font-semibold uppercase text-white absolute top-0 transition-all group-hover:text-4xl group-hover:bg-[#00000099]">
                  {item.title}
                </div>
              </div>
            )
          })}
        </div>
      </div >
      <div className={`w-full h-nonavbarheight bg-[#000000d7] grid place-content-center fixed top-[75px] z-30 ${overlay}`}>
        <div onClick={() => setOverlay('hidden')} className="w-full h-full absolute z-40"></div>
        <div className="mx-auto max-lg:hidden w-[90vw] xl:w-[1050px] h-[75vh] aspect-video flex justify-center relative z-50 rounded-[16px] overflow-hidden animate-popup">
          <div onClick={handleLeft} className="w-[50px] h-full bg-[#1360A5] text-6xl text-white border-r-4 grid place-content-center cursor-pointer select-none">&lt;</div>
          <img className="w-[80vw] xl:w-[950px] h-full object-cover" src={gallery.photos[position]} alt="Memories" />
          <div onClick={handleRight} className="w-[50px] h-full bg-[#1360A5] text-6xl text-white border-l-4 grid place-content-center cursor-pointer select-none">&gt;</div>
        </div>
        <div className="hidden max-lg:flex w-[80vw] h-[75vh] rounded-3xl p-5 bg-[#898989a6] relative z-50 items-center justify-center flex-wrap gap-5 overflow-scroll">
          {gallery.photos.map((item, index) => {
            return ( 
              <img key={index} className="w-[300px] h-[200px]" src={item} alt="memories"/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery