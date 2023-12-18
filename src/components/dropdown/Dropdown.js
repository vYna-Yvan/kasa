import React, { useState } from 'react'
import arrow from '../../assets/icone/arrow_back_ios-24px 2.svg'
import arrowDown from '../../assets/icone/arrow_down.svg'

const Dropdown = (props) => {
    const { data, type } = props
    const { title, description } = data
    const [toggleDescription, setToggleDescription] = useState(false)
    const onToggleDescription = () => {
        setToggleDescription(!toggleDescription)
    }
    return (
        <div>
            <div className='dropdown'>
                <p>{title}</p>
                <img onClick={onToggleDescription} alt='arrow' className='arrow' src={toggleDescription ? arrowDown : arrow} ></img>
            </div>
            {toggleDescription && <div className='description' >{type === 'string' ? <div>{description}</div> : description.map(des => <div>{des}</div>)}</div>}
        </div>

    )
}

export default Dropdown