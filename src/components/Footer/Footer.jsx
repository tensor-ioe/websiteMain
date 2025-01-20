import { NavLink } from "react-router-dom"
import logo from '../../images/assets/logoBlackVariant.png'
import facebook from '../../images/assets/facebook.png'
import instagram from '../../images/assets/instagram.png'
import linkedin from '../../images/assets/linkedin.png'
import gps from '../../images/assets/gps.png'
import mail from '../../images/assets/mail.png'
import pages from '../../constants/pages'

const Footer = () => {
    const socialMedia = [
        ["https://www.instagram.com/tensorioe/", instagram, 'tensorioe'],
        ["https://www.facebook.com/TensorIOE", facebook, 'TensorIOE'],
        ["https://www.linkedin.com/company/tensorioe/?fbclid=PAZXh0bgNhZW0CMTEAAaYRkBakT16ytQ9q6E_0lpo49NCCaEz5WYdnztbNrWV9P37ytK0dTxGNh-c_aem_gy2aLNm2PShqwl1tnZU3kg", linkedin, 'TensorIoe']
    ]

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="w-full relative z-20">
            <svg viewBox="0 150 1440 120">
                <path fill="#10518A" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,170.7C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className="w-full mt-[-5px] bg-footerbgcolor">
                <div className="w-width h-[300px] flex justify-between items-center mx-auto">
                    <div className="flex flex-col items-center gap-[22.5px] mr-16">
                        <h1 className="text-[30px] font-extrabold">Follow us</h1>
                        {socialMedia.map((item, index) => {
                            return (
                                <a key={index} className="w-full flex items-center justify-between text-[18px]" target='_blank' rel="noopener noreferrer" href={item[0]}>
                                    <img src={item[1]} alt="" height={`25px`} width={'25px'} />
                                    {item[2]}
                                </a>
                            )
                        })}
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[30px] font-extrabold">Sitemap</h1>
                        {pages.map((page, index) => {
                            return (
                                <NavLink key={index} className="justify-center opacity-50 text-[18px] hover:opacity-100" to={`/${page.toLowerCase()}`}>{page}</NavLink>
                            )
                        })}
                    </div>
                    <div className="flex flex-col items-center gap-[15px]">
                        <NavLink to='/' onClick={scrollToTop}>
                            <img src={logo} alt="Tensor" height='90px' width='90px' />
                        </NavLink>
                        <a className="flex gap-[10px] text-[18px]" target='_blank' rel="noopener noreferrer" href="https://www.google.com/maps/place/IOE,+Thapathali+Campus/@27.6941071,85.3186142,19z/data=!4m6!3m5!1s0x39eb19ae08c068d9:0x475bed1f66d060c!8m2!3d27.6940347!4d85.3188261!16s%2Fm%2F05zhjq0?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">
                            <img src={gps} alt="Location" width='20px' />
                            IOE THAPATHALI
                        </a>
                        <a className="flex gap-[10px] text-[18px]" target='_blank' rel="noopener noreferrer" href="mailto:tensor@tcioe.edu">
                            <img src={mail} alt="Mail" width='35px' />
                            tensorioe@tcioe.edu
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-solid border-white bg-copyrightbgcolor text-white h-[30px] text-center leading-[30px]">&copy;copyright@tensor</div>
        </div>
    )
}
export default Footer;