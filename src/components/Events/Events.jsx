import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import events from '../../constants/events'
import close from '../../images/assets/close.png'

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [overlay, setOverlay] = useState('hidden')
  const [event, setEvent] = useState({})

  const handleClickEvent = (event) => {
    setOverlay('block')
    setEvent(event)
  }
  return (
    <div className='relative'>
      <div className={`w-width mx-auto pt-10 mb-10 relative z-0`}>
        {/* blob-1 */}
        <div className="w-[500px] h-[500px] bg-[#90C3F6] absolute top-[-10%] left-[-30%] rounded-customborder animate-change"></div>
        {/* blob-2 */}
        <div className="w-[500px] h-[500px] bg-[#90C3F6] absolute bottom-[-40%] right-[-20%] rounded-customborder animate-change"></div>
        {/* Begining of event page  */}
        <h1 className='text-4xl font-extrabold text-center mb-7'>EVENTS</h1>
        <div className="flex items-center justify-between flex-wrap gap-10">
          {events.map((item, index) => {
            return (
              // wrapping a function with args into another anonymous function, to execute only when clicked as '()' executes a function immediately
              <div key={index} onClick={() => handleClickEvent(item)} className="group w-[350px] aspect-[4/3] rounded-xl shadow-boxShadow relative overflow-hidden hover:cursor-pointer">
                <img className='w-full h-full object-fill rounded-xl transition-all group-hover:scale-110' src={item.eventImage} alt="memories" />
                <div className="w-full h-full rounded-xl bg-[#1360A5AB] grid place-content-center text-3xl font-semibold uppercase text-white absolute top-0 transition-all group-hover:text-4xl group-hover:bg-[#00000099]">
                  {item.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`w-full h-nonavbarheight bg-[#00000096] grid place-content-center fixed top-[75px] z-30 ${overlay}`}>
        <div onClick={() => setOverlay('hidden')} className="w-full h-full absolute z-40"></div>
        <div className="w-[65vw] h-[80vh] bg-[#90C3F6] rounded-xl relative z-50 text-white overflow-hidden animate-popup">
          <div className='relative'>
            <img onClick={() => setOverlay('hidden')} className="w-6 absolute top-1/2 -translate-y-1/2 right-7 cursor-pointer" src={close} alt="closeBtn" />
            <h1 className="text-3xl text-center font-bold leading-[70px] bg-[#1360A5AB] border-b-4">{event.title}</h1>
          </div>
          <div className="w-full h-full flex text-black">
            <div className="w-2/5 py-4 px-10">
              <NavLink to="/gallery">
                <img className="w-full aspect-[4/3] rounded-xl mb-2 cursor-pointer" src={event.eventImage} alt="Event here" />
              </NavLink>
              <h1 className="text-xl text-center font-bold">{event.date}</h1>
            </div>
            <div className="w-3/5 h-full border-l-4 py-4 px-10  text-justify">
              {event.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events