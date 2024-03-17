import './Section_3.scss'

function Section_3() {

    return (
        <section className='section3'>
            <div className='section3Content container'>
                <div className='section3ContentHead'>
                    <p className='section3ContentText1'>
                        Найгарячіші товари
                    </p>
                    <div className='section3ContentText2'>
                        <div className='section3ContentText2numbers'>
                            <p>01</p>
                            <p>/</p>
                            <p>03</p>
                        </div>
                        <div className='section3ContentText2Arrows'>
                            <p>&#10229;</p>
                            <p>&#10230;</p>
                        </div>
                    </div>
                </div>
                <div className='section3ContentCarts'>
                    <div className='section3ContentCart1'>
                        <img src='../../../../public/Cart1.png' alt='img'/>
                        <p className='CartName'>Термобілизна для бодібілдерів</p>
                        <div className='CartDescription'>
                            <p className='CartDescriptionGender'>Для чоловіків</p>
                            <p className='CartDescriptionOther'>2 кольори</p>
                        </div>
                        <p className='price'>4000грн</p>
                    </div>
                    <div className='section3ContentCart2'>
                        <img src='../../../../public/Cart2.png' alt='img'/>
                        <p className='CartName'>Майка для бодібілдерів</p>
                        <div className='CartDescription'>
                            <p className='CartDescriptionGender'>Для жінок</p>
                            <p className='CartDescriptionOther'>2 кольори</p>
                        </div>
                        <p className='price'>1100грн</p>
                    </div>
                    <div className='section3ContentCart3'>
                        <img src='../../../../public/Cart3.png' alt='img'/>
                        <p className='CartName'>Ланцюжок для бодібілдерів</p>
                        <div className='CartDescription'>
                            <p className='CartDescriptionGender'>Аксесуари</p>
                            <p className='CartDescriptionOther'>30 кг.</p>
                        </div>
                        <p className='price'>2000грн</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_3