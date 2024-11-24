import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';

const Social = () => (
    <div className="home__social">
        <a href="https://www.linkedin.com" className="home__social-icon linkedin" target="_blank" rel="noopener noreferrer">
            <Linkedin />
        </a>

        <a href="https://www.github.com" className="home__social-icon github" target="_blank" rel="noopener noreferrer">
            <Github />
        </a>

        <a href="https://www.instagram.com" className="home__social-icon instagram" target="_blank" rel="noopener noreferrer">
            <Instagram />
        </a>
    </div>
);

export default Social;
