import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="footer footer-center bg-secondary text-black rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href=""> <FaLinkedin size={30}/></a>
                    <a href=""> <RiInstagramFill size={30}/></a>
                    <a href=""> <IoLogoWhatsapp size={30}/></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Nadia.P.R</p>
            </aside>
        </footer>
    )
}
