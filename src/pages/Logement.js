import React, { useEffect, useState } from 'react'
import apiData from '../api/api.json'
import { useNavigate, useParams } from 'react-router-dom'
import '../style/Logement.css'
import left_arrow from '../assets/icone/Left_arrow.svg'
import right_arrow from '../assets/icone/Right_arrow.svg'

import Dropdown from '../components/dropdown/Dropdown'

import { Rating } from '../components'

const Logement = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [logement, setLogement] = useState(null) 
    const [carouselIndex, setCarouselIndex] = useState(0)
   
    useEffect(() => {
        const index = apiData.findIndex(item => item.id === id)
        console.log(index)
        if (index < 0) {
            navigate('/404')
        } else {
            

            setLogement(apiData[index])
            setLoading(false)
        }
    }, [id, navigate])



    const incrementIndex = () => {
        const newIndex = carouselIndex + 1
        if (newIndex >= logement.pictures.length) {
            setCarouselIndex(0)
        } else {
            setCarouselIndex(newIndex)
        }
    }

    const decrementIndex = () => {
        const newIndex = carouselIndex - 1
        if (newIndex < 0) {
            setCarouselIndex(logement.pictures.length)
        } else {
            setCarouselIndex(newIndex)
        }
    }
   

    return (
       loading ? <div>loading ...</div> :
            <div className='logement_container'>
                <div className='img_cover'>
                    {logement.pictures.length > 1 ? (<div className='left_arrow' ><img onClick={decrementIndex} alt='précédent' src={left_arrow} /></div>) : null}
                    <img className='logement_img' alt={logement.title} src={logement.pictures[carouselIndex]}></img>
                    {logement.pictures.length > 1 ? (<p className='carousel_number'>  {carouselIndex + 1}/{logement.pictures.length}</p>) : null}
                    {logement.pictures.length > 1 ? (<div className='right_arrow' ><img onClick={incrementIndex} alt='Suivant' src={right_arrow} /></div>) : null}
                </div>

                <div className='logement_info_container'>
                    <div className='logement_info_box'>
                        <h1 className='logement_title'>{logement.title}</h1>
                        <div className='logement_location' >{logement.location}</div>
                        <div className='logement_tags'>{logement.tags.map((tag, i) => (<div key={i}  >{tag}</div>))}</div>
                       
                    </div>
                    <div className='host_info_box'>
                        <div className='host_info'>
                            <div>{logement.host.name}</div>
                            <img alt={logement.host.name} src={logement.host.picture}></img>
                        </div>
                        <Rating rating={logement.rating}/>
                    </div>
                  
                </div>
                <div className='logement_des'>
                    <Dropdown data={{ title: 'Description', description: logement.description }} type='string' />
                    <Dropdown data={{ title: 'Equipements', description: logement.equipments }} type='array' />
                </div> 
            </div >
    )
} 

export default Logement