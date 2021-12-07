import React from 'react'
import '../Containers/AboutCard.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa'

const AboutCard = (props) => {
    return (
        <div className=" main bg-white mb-2 mt-4 pt-4">
            <div>
                <div className="about-header p-2">
                <strong>About Author &nbsp; </strong>

                    <FaFacebook className="mr-3" />
                    <FaInstagram className="mr-3" />
                    <FaTwitter className="mr-3" />
                    <FaLinkedin className="mr-3" />

                </div>
            </div>

            <div className="about-body p-2">
                <div className="img-square-holder">
                    <div className="round-img bg-black">
                        <FaUser/>
                    </div>
                </div>

                <div className="about-text p-2">
                    <h3><strong>Musah Musah</strong></h3>
                    <div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen 
                        book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutCard
