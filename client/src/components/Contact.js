import { useState } from "react"
import { BsChatDotsFill } from "react-icons/bs"
import { FaTimes } from "react-icons/fa" 

const Contact = () => {
    const [contact, setContact] = useState(false)
    const handleClick = () => setContact(!contact)

    return (
        <div className="contact">
            { 
                !contact ? <></> :
                <div className="form-container">                
                    <form action="https://getform.io/f/b29f9a9a-752c-4404-942e-4f935b22c05d" method="POST" className="contact-form">
                        <div className="header-box">
                            <h2>CDGroup</h2>
                        </div>
                        <div className="header-text">
                            <p>Hi! Let us know how we can help and we'll respond shortly</p>
                        </div>
                        <input 
                            className="form-input"
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                        />
                        <input 
                            className="form-input"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            className="form-input"
                            name="message"
                            type="text"
                            placeholder="How can we help?"
                            rows={10}
                            required
                        />
                        <button className="form-button">- Send -</button>
                    </form>
                </div>
            
            }
            <div onClick={handleClick} className="contact-icon">
                { !contact ? <BsChatDotsFill /> : <FaTimes /> }
            </div>
        </div>
    )
}

export default Contact