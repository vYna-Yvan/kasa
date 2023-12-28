import React from 'react'
import '../style/Home_style.css'
import mainImage from '../assets/image/image_home.jpg'
import apiData from '../api/api.json'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='home-container'>
            <div className='text-img'><img alt='sea' src={mainImage} />

                <h1 className='title_home'>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='main-content'>
                {apiData.map(data => (<div className='home_card' key={data.id} style={{ backgroundImage: `url(${data.cover})` }}><Link className='card_title' to={`/logement/${data.id}`}>{data.title}</Link></div>))}

            </div>
        </div>
    )
}
export default Home