import React from 'react'
import '../App.css';
import imagesData from './data/imagesData.js'
import {Context} from '../Context'

export default function CarouselItem() {
    const imagesArray = imagesData.data.images
    const {showTheme} = React.useContext(Context)

    const [image, setImage] = React.useState([])
    const [visible, setVisible] = React.useState(0)

    function getImage() {
        const selectImage = imagesArray.find((img, index) => index === visible)
        console.log(selectImage, "select")
        setImage(() => (
            <div key={selectImage.id} id={selectImage.id} className={`carousel-item visible`}>
                <img src={selectImage.url} alt={selectImage.name} />
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
        <div className={`carousel ${showTheme}`}>
            {image}
            <div className={`carousel-actions ${showTheme}`}>
                <button 
                    className={`carousel-button-prev ${showTheme}`}
                    aria-label="Previous Slide"
                    id="carousel-button-prev"
                    onClick={prevSlide}>{'<'}</button>
                <button 
                    className={`carousel-button-next ${showTheme}`}
                    aria-label="Next Slide"
                    id="carousel-button-next"
                    onClick={nextSlide}>{'>'}</button>
            </div>
        </div>

    )
}