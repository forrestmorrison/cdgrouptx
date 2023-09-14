import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa" 
import Logo from "../images/cdgroup-logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <>
        <div className="navbar">
            <Link to="/"
                style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <img src={Logo} alt="logo" className="logo" />
            </Link>
            
            {/* Menu */}

            <div className="links">
                <Link to="/"
                    style={{
                        margin: "0 20px",
                    }}
                >
                    <a href='/'>home</a>
                </Link>
                <Link to="/our-leadership"
                    style={{
                        margin: "0 20px",
                    }}
                >
                    <a href='/our-leadership'>our leadership</a>
                </Link>
                <Link to="/services"
                    style={{
                        margin: "0 20px",
                    }}
                >
                    <a href='/services'>services</a>
                </Link>
            </div>

            {/* Hamburger */}

            <div onClick={handleClick} className="hamburger">
                { !nav ? <FaBars /> : <FaTimes /> }
            </div>
        </div>
        { 
            !nav ? <></> : 
            <div className="mobile-links">
                <Link to="/"
                    onClick={handleClick}
                    style={{
                        margin: "0 20px",
                    }}
                >
                    <a href='/'>home</a>
                </Link>
                <Link to="/our-leadership"
                    onClick={handleClick}
                    style={{
                        margin: "0 20px",
                    }}
                >
                    <a href='/our-leadership'>our leadership</a>
                </Link>
                <Link to="/services"
                    onClick={handleClick}
                    style={{
                        margin: "0 20px",
                    }}
                >
                    <a href='/services'>services</a>
                </Link>
                <div className="space" />
            </div>
        }
        
        </>
    )
}

export default Navbar