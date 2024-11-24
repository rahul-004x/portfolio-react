import React from 'react'
import { Linkedin, Github, } from 'lucide-react'
import { BsTwitterX } from "react-icons/bs";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rahul</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Project</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin stockWidth={20}/>
        </a>

        <a href="https://www.github.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <Github />
        </a>

        <a href="https://www.twitter.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
        <BsTwitterX />
        </a>
            </div>
        
            <span className="footer__copy">
                &#169; Rahul Yadav. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer