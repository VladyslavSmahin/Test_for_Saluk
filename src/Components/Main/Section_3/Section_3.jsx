import React, { useState } from "react";
import './Section_3.scss';

function Section_3() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            img: './Cart1.png',
            imgHeart: '/Heart.png',
            name: 'Термобілизна для бодібілдерів',
            gender: 'Для чоловіків',
            other: '2 кольори',
            price: '4000грн'
        },
        {
            img: './Cart2.png',
            imgHeart: '/Heart.png',
            name: 'Майка для бодібілдерів',
            gender: 'Для жінок',
            other: '2 кольори',
            price: '1100грн'
        },
        {
            img: './Cart3.png',
            imgHeart: '/Heart.png',
            name: 'Ланцюжок для бодібілдерів',
            gender: 'Аксесуари',
            other: '30 кг.',
            price: '2000грн'
        }
    ];

    const nextSlide = () => {
        const nextIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
        setActiveSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
        setActiveSlide(prevIndex);
    };

    const handleClick = (index) => {
        setActiveSlide(index);
    };

    return (
        <section className='section3'>
            <div className='section3Content container'>
                <div className='section3ContentHead'>
                    <p className='section3ContentText1'>
                        Найгарячіші товари
                    </p>
                    <div className='section3ContentText2'>
                        <div className='section3ContentText2numbers'>
                            <p>{activeSlide + 1}</p>
                            <p>/</p>
                            <p>{slides.length}</p>
                        </div>
                        <div className='section3ContentText2Arrows'>
                            <button onClick={prevSlide}><p>&#10229;</p></button>
                            <button onClick={nextSlide}><p>&#10230;</p></button>
                        </div>
                    </div>
                </div>
                <div className='section3ContentCarts'>
                    {slides.map((slide, index) => (
                        <div key={index}
                             className={`slide slide${index + 1} ${activeSlide === index ? 'active' : ''}`}
                             onClick={() => handleClick(index)}>
                            <img src={slide.img} alt='img'/>
                            <img src={slide.imgHeart} className='slideImgHeart' alt='img'/>
                            <p className='CartName'>{slide.name}</p>
                            <div className='CartDescription'>
                                <p className='CartDescriptionGender'>{slide.gender}</p>
                                <p className='CartDescriptionOther'>{slide.other}</p>
                            </div>
                            <p className='price'>{slide.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section_3;
