import React from 'react'
import '../style/About.css'
import Aboutimg from '../assets/image/About-image.jpeg'
import arrow from '../assets/icone/arrow_back_ios-24px 2.svg'
import Dropdown from '../components/dropdown/Dropdown'

const dropdownData = [
    { title: 'Flabalité', description: 'description flabilité' },
    { title: 'Respect', description: 'description respect' },
    { title: 'Service', description: 'description service' },
    { title: 'Sécurité', description: 'description sécurité' }
]

const About = () => {
    return (
        <div className='about_container'>
            <div className='img_box'>
                <img src={Aboutimg} alt='forest-montain' ></img>
            </div>
            <div className='dropdown_box'>
                {dropdownData.map(data => (<Dropdown data={data} type='string' />))}


            </div>
        </div>
    )
}

export default About