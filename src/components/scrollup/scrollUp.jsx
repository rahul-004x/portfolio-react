import React, { useEffect, useState } from 'react';
import { HiArrowUp } from "react-icons/hi";
import './scrollup.css';

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`}>
            <i className="scrollup__icon"><HiArrowUp /></i>
        </a>
    );
}

export default ScrollUp;
