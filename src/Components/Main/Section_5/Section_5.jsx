import React, { useState } from 'react';
import './Section_5.scss';

function Section_5() {
    const [activeReviewIndex, setActiveReviewIndex] = useState(0);

    const reviews = [
        {
            stars: 4,
            name: 'Жора Ремінгтон',
            content: 'Дуже задоволений якістю обслуговування і самою продукцією...',
        },
        {
            stars: 4,
            name: 'Жора Ремінгтон',
            content: 'Дуже задоволений якістю обслуговування і самою продукцією...',
        },
        {
            stars: 4,
            name: 'Жора Ремінгтон',
            content: 'Дуже задоволений якістю обслуговування і самою продукцією...',
        },
        {
            stars: 4,
            name: 'Жора Ремінгтон',
            content: 'Дуже задоволений якістю обслуговування і самою продукцією...',
        },


    ];

    const nextReview = () => {
        setActiveReviewIndex(prevIndex => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        console.log(activeReviewIndex)
    };

    const prevReview = () => {
        setActiveReviewIndex(prevIndex => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
        console.log(activeReviewIndex)
    };

    return (
        <section className='section5'>
            <div className='section5Content container'>
                <div className='section5ContentHeader'>
                    <h3 className='section5ContentText1'>Вiдгуки наших клієнтів</h3>
                    <div className='section5ContentText2'>
                        <div className='section5ContentText2_1'>
                            <p>01</p>
                            <p>/</p>
                            <p>03</p>
                        </div>
                        <div className='section5ContentText2_2'>
                            <button onClick={prevReview}>&#10229;</button>
                            <button onClick={nextReview}>&#10230;</button>
                        </div>
                    </div>
                </div>
                <div className='section5ContentCarts'  style={{
                    transform: `translateX(-${activeReviewIndex * 1170/4}px)`

                }}>
                    {reviews.map((review, index) => (
                        <div key={index} className={`section5ContentCart section5ContentCart${index + 1}`}>
                            <div className='section5ContentCartName section5ContentCart1Name'>
                                <p>&#x2605; &#x2605; &#x2605; &#x2605;  &#x2606;</p>
                                <p>{review.name}</p>
                            </div>
                            <p className='section5ContentCartRewiew'>{review.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Section_5;
