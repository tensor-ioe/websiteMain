import { NavLink } from "react-router-dom"
import { useState } from "react"
import logo from "../../images/assets/logo.png"
import pages from '../../constants/pages'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => setToggle((prev) => !prev)
    
    return (
        <div className={`h-[75px]  grid place-content-center ${toggle ? 'mb-[250px]' : 'mb-[0px]'} shadow-navbarShadow sticky top-0 z-30 duration-300 bg-white xl:mb-0`}>
            <div className="w-[100vw] h-[75px] px-4 flex items-center justify-between relative z-20 bg-white xl:w-width xl:p-0">
                <NavLink className="grid place-content-center" to='/' onClick={() => { window.scrollTo(0, 0) }}>
                    <img src={logo} alt="Tensor" height='50px' width='165px' />
                </NavLink>
                <div className='hidden xl:block'>
                    {pages.map((page, index) => {
                        return (
                            <NavLink key={index} className={
                                `text-[18px] no-underline px-[14px] py-[14px] hover:opacity-100
                                ${(index === (pages.length - 1)) ? `opacity-100 bg-applybgcolor rounded-lg` : 'opacity-55'}
                                `
                            } to={`/${page.toLowerCase()}`}>{page}</NavLink>
                        )
                    })}
                </div>
                <div onClick={handleToggle} className="flex flex-col gap-[7px] items-center justify-center cursor-pointer xl:hidden">
                    <div className="w-10 h-1 bg-[#1360A5] rounded-sm"></div>
                    <div className="w-10 h-1 bg-[#1360A5] rounded-sm"></div>
                    <div className="w-10 h-1 bg-[#1360A5] rounded-sm"></div>
                </div>
            </div>
            {/* for responsive navbar */}
            <div className={`w-[100vw] bg-white absolute z-10 ${toggle ? 'top-[101%]' : 'top-[-350%]'} duration-300 xl:hidden`}>
                {pages.map((page, index) => {
                    return (
                        <NavLink key={index} className={
                            `text-[14px] no-underline px-[14px] py-[14px] flex flex-row justify-center hover:opacity-100
                                ${(index === (pages.length - 1)) ? `opacity-100 bg-applybgcolor` : 'opacity-55'}
                                `
                        } to={`/${page.toLowerCase()}`}>{page}</NavLink>
                    )
                })}
            </div>
        </div>
    )
}
export default Navbar;