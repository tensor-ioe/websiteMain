import Sponsors from "../../constants/sponsors";

const HomeSponsor = () => {
    return (
        <div className="w-full pt-6">
            <div className="max-sm:text-3xl text-5xl font-bold text-center text-[#1360A5]">Sponsors</div>
            <div className="w-full xl:w-width max-sm:h-[180px] h-[300px] mx-auto flex items-center justify-around overflow-hidden">
                {Sponsors.map( (item, index) => {
                    return (
                        <img className="max-sm:w-[90px] sm:w-[120px] md:w-[140px] xl:w-[150px] aspect-square object-cover" key={index} src={item} alt="sponsors" />
                    )
                })}
            </div>
        </div>
    )
}

export default HomeSponsor;