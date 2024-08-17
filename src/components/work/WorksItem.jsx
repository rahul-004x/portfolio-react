import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";

export const WorksItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button">
            Demo <i className="work__button-icon">
            <RiArrowRightLine />
            </i>
        </a>
    </div>
  )
}

export default WorksItem;
