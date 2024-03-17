import './Header.scss'
function Header() {

    return (
        <header className="header">
            <div className='headerSection1 '>
                <div className='headerSection1Content container'>
                    <div className='headerSection1Contact'>
                        <p>098 900 09 09</p>
                        <a href='#'><p>Допомога</p></a>
                    </div>
                    <div className='headerSection1LogIn'>
                        <a href='#'><p>Увійти</p></a>
                        <p>/</p>
                        <a href='#'><p>Зареєструватися</p></a>
                    </div>
                </div>
            </div>
            <div className='headerSection2'>
                <div className='headerSection2Content container'>
                    <div>
                        <img src='../../../public/Logo.png' alt='img'/>
                    </div>
                    <div className='headerNav'>
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
                    <div className='headerSearch'>
                       <form className='searchForm'>
                           <label htmlFor='seachInput'></label>
                           <input className='searchInput' id='searchInput' name='searchInpt' type='text'/>
                       </form>
                        <a href='#'><img src='../../../public/Heart.png' alt=''/></a>
                        <a href='#'><img src='../../../public/bag.png' alt=''/></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header