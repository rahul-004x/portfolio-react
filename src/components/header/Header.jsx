import { House, UserRound, FileText, BriefcaseBusiness, Images, SendHorizontal, X, LayoutGrid } from 'lucide-react';
import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            // When the scroll is higher than 80 viewport height, add the scroll-header class to the header tag
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Rahul
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className='nav__icon'><House /></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className='nav__icon'><UserRound /></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className='nav__icon'><FileText /></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className='nav__icon'><BriefcaseBusiness /></i>
                                Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className='nav__icon'><Images /></i>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className='nav__icon'><SendHorizontal /></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className='nav__close' onClick={() => showMenu(!Toggle)}>
                        <X />
                    </i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='nav__icon'><LayoutGrid /></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
