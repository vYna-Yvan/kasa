import React from 'react'
import '../style/Home_style.css'
import mainImage from '../image/image_home.jpg'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='text-img'><img src={mainImage}>
            </img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='main-content'>

            </div>
        </div>
    )
}
export default Home