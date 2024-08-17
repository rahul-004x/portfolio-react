import React from 'react'
import {BadgeCheck} from 'lucide-react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Development</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <BadgeCheck size={16}/>
                <div>
                    <h3 className="skills__name">Node JS</h3>
                    <span className="skills__level">Basics</span>
                </div>
            </div>
            
            <div className="skills__data">
                <BadgeCheck size={16}/>
                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <BadgeCheck size={16}/>
                <div>
                    <h3 className="skills__name">C</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            
            <div className="skills__data">
                <BadgeCheck size={16}/>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend