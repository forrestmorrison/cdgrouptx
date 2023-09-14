import { useState } from "react"
import { BsChatDotsFill } from "react-icons/bs"
import { FaTimes } from "react-icons/fa" 

const Contact = () => {
    const [contact, setContact] = useState(false)
    const handleClick = () => setContact(!contact)

    return (
        <div className="contact">
            <div onClick={handleClick} className="contact-icon">
                { !contact ? <BsChatDotsFill /> : <FaTimes /> }
            </div>
        </div>
    )
}

export default Contact