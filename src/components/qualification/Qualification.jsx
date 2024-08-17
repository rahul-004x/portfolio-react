import React, { useState } from 'react';
import './qualification.css';
import { GraduationCap, BriefcaseBusiness, CalendarDays } from 'lucide-react';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="qualification__icon"><GraduationCap /></i>{" "}
                        Education
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="qualification__icon"><BriefcaseBusiness /></i>{" "}
                        Experience
                    </div>
                </div> 

                <div className="qualification__sections"> 
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Education Content */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Development</h3>
                                <span className="qualification__subtitle">University of Helisinki</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2024-present
                                </div>
                            </div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Python</h3>
                                <span className="qualification__subtitle">CS50P</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2023-2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">CS50W</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2024-present
                                </div>
                            </div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">C</h3>
                                <span className="qualification__subtitle">CS50X</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2023-2024
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Experience Content */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">XYZ Inc.</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2023-present
                                </div>
                            </div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">ABC Inc.</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2023-present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">XYZ Inc</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2023-present
                                </div>
                            </div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className="qualification__center">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">ABC Inc</span>
                                <div className="qualification__calendar">
                                    <CalendarDays /> 2023-present
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
}

export default Qualification;
