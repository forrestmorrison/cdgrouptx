import { Link } from "react-router-dom"
import Logo from "../images/cdgroup-logo.png"

const Navbar = () => {
  return (
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
    </div>
  )
}

export default Navbar