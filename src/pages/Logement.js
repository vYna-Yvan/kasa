import React, { useEffect, useState } from 'react'
import apiData from '../api/api.json'
import { useParams } from 'react-router-dom'
import '../style/Logement.css'
import left_arrow from '../assets/icone/Left_arrow.svg'
import right_arrow from '../assets/icone/Right_arrow.svg'
import star_active from '../assets/icone/star-active.svg'
import star_inactive from '../assets/icone/star-inactive.svg'
import Dropdown from '../components/dropdown/Dropdown'

const Logement = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [logement, setLogement] = useState(null)
    const [carouselIdex, setCarouselIndex] = useState(0)
    const [stars, setStars] = useState([])
    useEffect(() => {
        const index = apiData.findIndex(item => item.id === id)
        console.log(index)
        if (index < 0) {

        } else {
            let starArray = []
            for (let i = 0; i < 5; i++) {
                if (i < parseInt(apiData[index].rating)) {
                    starArray.push('active')
                } else {
                    starArray.push('inactive')
                }

            }
            console.log(apiData[index].rating)
            console.log(starArray)
            setStars(starArray)

            setLogement(apiData[index])
            setLoading(false)
        }
    }, [])
    const incrementIndex = () => {
        const newIndex = carouselIdex + 1
        if (newIndex >= logement.pictures.length) {
            setCarouselIndex(0)
        } else {
            setCarouselIndex(newIndex)
        }
    }

    const decrementtIndex = () => {
        const newIndex = carouselIdex - 1
        if (newIndex < 0) {
            setCarouselIndex(logement.pictures.length)
        } else {
            setCarouselIndex(newIndex)
        }
    }
    return (
        loading ? <div>loading...</div> :
            <div >
                <div className='img_cover'>
                    <div className='left_arrow' ><img onClick={decrementtIndex} alt='précédent' src={left_arrow} /></div>
                    <img className='logement_img' alt={logement.title} src={logement.pictures[carouselIdex]}></img>
                    <div className='right_arrow' ><img onClick={incrementIndex} alt='Suivant' src={right_arrow} /></div>
                </div>
                <div className='logement_info_container'>
                    <div>
                        <div>{logement.title}</div>
                        <div>{logement.location}</div>
                        <div>{logement.tags.map(tag => (<div>{tag}</div>))}</div>
                        <Dropdown data={{ title: 'Description', description: logement.description }} type='string' />
                    </div>
                    <div>
                        <div>
                            <div>{logement.host.name}</div>
                            <img alt={logement.host.name} src={logement.host.picture}></img>
                        </div>
                        <div>
                            {stars.map((star, i) => (<img key={i} alt={star} src={star === 'active' ? star_active : star_inactive} />))}
                        </div>
                        <Dropdown data={{ title: 'Equipements', description: logement.equipments }} type='array' />
                    </div>
                </div>

            </div >
    )
}

export default Logement