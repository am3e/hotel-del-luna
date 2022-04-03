import React from 'react'
import '../App.css';
import imagesData from './data/imagesData.js'
import {Context} from '../Context'

export default function CarouselItem() {
    const imagesArray = imagesData.data.images

    const [image, setImage] = React.useState([])
    const [visible, setVisible] = React.useState(0)

    const arrowLeft = <img className="left" alt="arrow" src="./arrow-left-s-fill.png"/>
    const arrowRight = <img className="right" alt="arrow" src="./arrow-right-s-fill.png"/>

    function getImage() {
        const selectImage = imagesArray.find((img, index) => index === visible)
        const prevImage = imagesArray.find((img, index) => index === visible-1 || imagesArray.length - 2)
        const nextImage = imagesArray.find((img, index) => index === visible+1 || 1)
        console.log(selectImage, "select")
        setImage(() => (
            <div key={selectImage.id} id={selectImage.id} className={`carousel-item visible`}>
                <img className="fill-img" src={selectImage.url} alt={selectImage.name} />
                <img className="invisible" src={prevImage.url} alt={prevImage.name} />
                <img className="invisible" src={nextImage.url} alt={nextImage.name} />
                <div className="carousel-desc">{selectImage.desc}</div>
            </div>
        ))
    }

    function prevSlide() {
        setVisible(currentImage => 
            currentImage === 0 ?
            imagesArray.length - 1 : currentImage - 1)
    }
    function nextSlide() {
        setVisible(currentImage => 
            currentImage === imagesArray.length - 1 ?
             0 : currentImage + 1)
    }

    React.useEffect(getImage, [imagesArray, visible])

    console.log('rendered')
    return (
        <div className={`carousel`}>
            {image}
            <div className={`carousel-actions`}>
                <button 
                    className={`carousel-button-prev`}
                    aria-label="Previous Slide"
                    id="carousel-button-prev"
                    onClick={prevSlide}><span className="whiteblur">{arrowLeft}</span></button>
                <button 
                    className={`carousel-button-next`}
                    aria-label="Next Slide"
                    id="carousel-button-next"
                    onClick={nextSlide}><span className="whiteblur">{arrowRight}</span></button>
            </div>
        </div>

    )
}