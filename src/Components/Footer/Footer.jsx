import './Footer.scss'
function Footer() {

    return (
        <footer className='footer'>
            <div className='footerSection1'>
                <div className='footerSection1Content container'>
                    <div className='footerContacts'>
                        <div>
                            <h3 className='footerHeadText'>Контакт - центр</h3>
                            <p>098 900 09 09 </p>
                            <p>Пн - Пт 09:00 - 21:00</p>
                            <p>Пн - Пт 09:00 - 21:00</p>
                        </div>
                        <div className='socials'>
                            <a href='#' target="_blank">
                                <img src='../../../public/Inst.png' alt="img"/>
                            </a>
                            <a href='#' target="_blank">
                                <img src='../../../public/Viber.png' alt="img"/>
                            </a>
                            <a href='#' target="_blank">
                                <img src='../../../public/Telegram.png' alt="img"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='footerHeadText'>Покупцям</h3>
                        <a href='#'><p>Оплата і доставка</p></a>
                        <a href='#'><p>Поверненя</p></a>
                        <a href='#'><p>Питання та відповіді</p></a>
                    </div>
                    <div>
                        <h3 className='footerHeadText'>Особистий кабінет</h3>
                        <a href='#'><p>Мої дані</p></a>
                        <a href='#'><p>Історія замовлень</p></a>
                        <a href='#'><p>Улюблені</p></a>
                        <a href='#'><p>Розсилки</p></a>
                    </div>
                    <div>
                        <h3 className='footerHeadText'>Про компанію</h3>
                        <a href='#'><p>Про нас</p></a>
                        <a href='#'><p>Новинки</p></a>
                        <a href='#'><p>Стати портнером</p></a>
                        <a href='#'><p>Угода користувача</p></a>
                    </div>
                </div>
            </div>
            <div className='footerSection2'>
                <div className='footerSection2Content container'>
                    <div className='footerNav'>
                        <nav>
                            <ul>
                                <li><a href='#'>НОВИНКИ</a></li>
                                <li><a href='#'>ЧОЛОВІКИ</a></li>
                                <li><a href='#'>ЖІНКИ</a></li>
                                <li><a href='#'>АКСЕСУАРИ</a></li>
                                <li><a href='#'>АКЦІЇ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer