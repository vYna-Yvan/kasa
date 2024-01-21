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
                <img onClick={onToggleDescription} alt='arrow' className={`arrow ${toggleDescription ? 'rotate' : ''}`} src={arrow} ></img>
            </div>
            {toggleDescription && <div className={`DropContent ${arrow ? 'fade-in' : 'fade-out'}`}>{type === 'string' ? <p>{description}</p> : description.map((des, i)  => <div key={i} >{des}</div>)}</div>}
        </div>

    )
}

export default Dropdown