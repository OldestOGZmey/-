import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Oplata/UI/Loader/Loader'
import s from './Rovar.module.css'
const Tovar = () => {
return (
    <div className={s.tovar}>
    <div className={s.firstText}><span className={s.name}>Необходимые вложения</span> на старте</div>
    <div className={s.tovars}>
        <div className={s.cartaTovara}>
            <div className={s.raspolohCart}>
                <div className={s.firstText2}>
                Пакет 1 <div className={s.firstTextOsob}>350.000</div>
                </div>
                <div className={s.secondText}>
                <div>- продукция на стоимость пакета</div>
                <div>- скидка на продукцию до 45%</div>
                </div>
            <div>
            <Link to="/oplata"><button className={s.cartaBtn}>Выбрать пакет</button></Link>
            </div>
            </div>
        </div>
        <div className={s.cartaTovara}>
            <div className={s.raspolohCart}>
                <div className={s.firstText2}>
                Пакет 2 <div className={s.firstTextOsob}>400.000</div>
                </div>
                <div className={s.secondText}>
                <div className={s.grayTextCart}>
                - продукция на стоимость пакета 
                <div>- скидка на продукцию до 49% </div>
                </div>
                </div>
                <div>- печатные рекламные материалы (БЕСПЛАТНО)</div> 
                <div>- демонстрационный стенд с образцами</div>
            <div>
            <Link to="/oplata"><button className={s.cartaBtn}>Выбрать пакет</button></Link>
            </div>
            </div>
        </div>
        <div className={s.cartaTovara}>
            <div className={s.raspolohCart}>
                <div className={s.firstText2}>
                Пакет 3 <div className={s.firstTextOsob}>500.000</div>
                </div>
                <div className={s.secondText}>
                <div className={s.grayTextCart}>
                - продукция на стоимость пакета 
                <div>- скидка на продукцию до 49%  </div>
                <div>- печатные рекламные материалы (БЕСПЛАТНО) </div> 
                <div>- демонстрационный стенд с образцами  </div>
                </div>
                <div>- 2 дня обучения в центральном офисе  </div>
                <div>- бонус на размещение онлайн рекламы </div>
                </div>
            <div>
            <Link to="/oplata"><button className={s.cartaBtn}>Выбрать пакет</button></Link>
            </div>
            </div>
        </div>
    </div>
    <div>
        <div className={s.glavSecondText}>
        Помимо приобретения пакета, вам необходимы
        </div>
        <div className={s.Okey}>
            <div className={s.Title}><span className={s.tire}>.</span> Офис продаж от 25 кв.м </div>
            <div className={s.Title}><span className={s.tire}>.</span> Косметический ремонт в офисе</div>
            <div className={s.Title}><span className={s.tire}>.</span> Организация рабочих мест</div>
            <div className={s.Title}><span className={s.tire}>.</span> Рекламный бюджет на 1-2 месяца</div>
        </div>
    </div>
    </div>
)
}

export default Tovar
