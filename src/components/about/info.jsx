import React from 'react'
import { Briefcase, Headset } from 'lucide-react';
import { LiaMedalSolid } from "react-icons/lia";const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="about__icon"><LiaMedalSolid /></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 Year Working</span>
        </div>

        <div className="about__box">
        <i className="about__icon"><Briefcase /></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">N + Projects</span>
        </div>

        <div className="about__box">
        <i className="about__icon"><Headset /></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle"> Online 24/7 </span>
        </div>

    </div>
  )
}

export default info