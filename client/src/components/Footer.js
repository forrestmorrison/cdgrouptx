import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-info">
            <h5>COPYRIGHT © 2023 CDGROUP - ALL RIGHTS RESERVED.</h5>
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
    </div>
  )
}

export default Footer