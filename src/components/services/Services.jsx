import React from 'react';
import { useState } from 'react';
import { MoveRight, CircleCheck, X, FileJson, CodeXml, Github, Handshake, CopySlash } from 'lucide-react';
import './services.css';
import { LiaInfinitySolid } from "react-icons/lia";

const Services = () => {
    const [toggleState, setToggleState] = useState(null); // Use `null` to start with no modal open

    const toggleTab = (index) => {
        setToggleState(toggleState === index ? null : index); // Toggle between showing and hiding the modal
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {[
                    {
                        icon: <FileJson />,
                        title: 'Front-end Development',
                        description: 'Providing quality of work to clients and companies.',
                        services: [
                            'Structuring and styling web pages',
                            'Advanced JavaScript features and syntax',
                            'Building dynamic user interfaces, managing state with hooks, and using React Router'
                        ]
                    },
                    {
                        icon: <CodeXml />,
                        title: 'Back-end Development',
                        description: 'Providing quality of work to clients and companies.',
                        services: [
                            'Setting up servers and asynchronous programming',
                            'Creating RESTful APIs and using middleware',
                            'CRUD operations and schema definitions with Mongoose'
                        ]
                    },
                    {
                        icon: <Github />,
                        title: 'Development Tools and Practices',
                        description: 'Providing quality of work to clients and companies.',
                        services: [
                            'Version control with Git and collaboration on GitHub',
                            'Writing unit and integration tests using Jest and Cypress',
                            'Using Webpack, Babel, and npm for package management'
                        ]
                    },
                    {
                        icon: <LiaInfinitySolid />,
                        title: 'Deployment and DevOps',
                        description: 'Providing quality of work to clients and companies.',
                        services: [
                            'Deploying applications to Heroku and understanding Docker basics',
                            'Setting up continuous integration and deployment pipelines'
                        ]
                    },
                    {
                        icon: <CopySlash />,
                        title: 'Additional Skills',
                        description: 'Providing quality of work to clients and companies.',
                        services: [
                            'Setting up and working with GraphQL APIs',
                            'Understanding and using TypeScript',
                            'Implementing basic web security practices, authentication, and authorization'
                        ]
                    },
                    {
                        icon: <Handshake />,
                        title: 'Soft Skills',
                        description: 'Providing quality of work to clients and companies.',
                        services: [
                            'Debugging and troubleshooting, reading documentation',
                            'Working in teams, code reviews, and pair programming'
                        ]
                    }
                ].map((service, index) => (
                    <div className="services__content" key={index}>
                        <div>
                            <i className="services__icon">{service.icon}</i>
                            <h3 className="services__title">{service.title.split('<br/>').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(index)}>
                            View More <i className="services__button-icon"><MoveRight size={15} /></i>
                        </span>

                        <div className={toggleState === index ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(null)} className="services__modal-close"><X /></i>

                                <h3 className="services__modal-title">{service.title}</h3>
                                <p className="services__modal-description">{service.description}</p>

                                <ul className="services__modal-services grid">
                                    {service.services.map((s, i) => (
                                        <li className="services__modal-service" key={i}>
                                            <i className="services__modal-icon"><CircleCheck /></i>
                                            <p className="services__modal-info">{s}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
