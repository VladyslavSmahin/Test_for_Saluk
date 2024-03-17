import "./Section_4.scss"
function Section_4() {

    return (
        <section className='section4'>
            <div className='section4Content'>
                <h3 className='section4ContentHeader'>Спіймай всі акції!</h3>
                <p>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
                <form className="form">
                    <label htmlFor="section4Input"></label>
                    <div className="inputWrapper">
                        <input className='section4Input' id='section4Input' type="email" name="email" placeholder="Введіть" required/>
                        <button className='formButton' type="submit">Підписатись</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Section_4