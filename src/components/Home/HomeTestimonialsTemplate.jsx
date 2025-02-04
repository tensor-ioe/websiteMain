import { useRef, useEffect } from 'react';
import testimonies from '../../constants/Testimonies'

const HomeTestimonialsTemplate = () => {
    const divRef = useRef(null)
    // using the useEffect so that whole page wont scroll just the mounted component; HomeTestimonialsTemplate 
    useEffect(() => {
        const div = divRef.current;
        if (div) {
          const handleWheel = (event) => {
            var scrollAmount = event.deltaY * 5; // Get vertical scroll amount * 6 to increase speed
            div.scrollLeft += scrollAmount; // Scroll horizontally
            event.preventDefault(); // Prevent the default vertical scroll
          };
          // Add the event listener to the section
          div.addEventListener("wheel", handleWheel);
          // Cleanup the event listener when the component unmounts
          return () => {
            div.removeEventListener("wheel", handleWheel);
          };
        }
      }, []);
    return (
        <>
            <h1 className="text-4xl font-extrabold text-center">Testimonials</h1>
            <div ref={divRef} className="scroll-bar w-[90vw] xl:w-width pb-3 mx-auto whitespace-nowrap overflow-y-hidden"> 
                {testimonies.map((item, index) => {
                    return (
                        <div key={index} className={`w-[320px] h-[510px] inline-block ${index === testimonies.length - 1 ? "mr-1" : "mr-7"} pt-[75px]`}> {/* no right margin for last element */}
                            <div className="h-[425px] relative pt-[80px] px-5 bg-[#E5EDF2] rounded-2xl shadow-boxShadow">
                                <img className="w-[150px] h-[150px] rounded-[50%] absolute top-[-75px] left-[85px] object-cover" src={item.PersonImage} alt="personimage" />
                                <div className="whitespace-normal opacity-65">{item.Testimony}</div>
                                <h1 className="text-center text-xl font-bold">{item.Name}</h1>
                                <h1 className="text-center text-xl opacity-65">{item.Role}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default HomeTestimonialsTemplate