import React, { useState, useRef } from "react";

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 2;
    const slideWidth = 100;
    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        setCurrentIndex(index);
        const offset = -(index * slideWidth);
        sliderRef.current.style.transform = `translateX(${offset}%)`;
        console.log(currentIndex)
    };

    const nextSlide = () => {
        const nextIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1;
        goToSlide(prevIndex);
    };

    return (
        <section className='section1'>
            <div className="slider-container">
                <div className="slider" ref={sliderRef}>
                    <div className="slide slide1">
                        <img className="slideImg slide1Img" src="./Slider_Image.jpg" alt="img" />
                        <div className='slide1Content'>
                            <div className='slide1Content_1'>
                                <p>Швидше.<br />Вище.<br />Сильніше.</p>
                                <p>Разом із Nike</p>
                            </div>
                            <div className='slide1Content_2'>
                                <p>Знижки до 40%</p>
                                <p>Залишився лише тиждень</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <img className="slideImg slide2Img" src="./Slider_Image.jpg" alt="img" />
                    </div>
                </div>
                <div className='slider_arrows'>
                    <button className="slider-btn slider-btn-left" onClick={prevSlide}>
                        <img className="sliderArrowLeft" src="./Arrow_right.png" alt="arrow" />
                    </button>
                    <button className="slider-btn slider-btn-right" onClick={nextSlide}>
                        <img className="sliderArrowRight" src="./Arrow_right.png" alt="arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slider;
