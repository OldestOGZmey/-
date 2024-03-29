import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css'

const Header = () => {
    return (  
        <div className={s.mainHeader}>
        <div className={s.header}>
        <div className={s.headerLogo}></div>
        <div className={s.headerNav}>
        <div className={s.headerNavText}>Интернет-магазин</div>
        <div className={s.headerNavText}>Отзывы</div>
        <div className={s.headerNavText}>Новинка</div>
        <div className={s.headerNavText}>Корзина</div>
        <div className={s.headerNavText}>Блог</div>
        </div>
        <div className={s.headerDop}>
            <div className={s.headerPhone}>
            +7(913)205-06-13
            </div>
            
            <button className={s.headerPhonCall}>Заказать звонок</button>
            
        </div>
        
        </div>

        <div className={s.content}>
            <div className={s.contentFirstText}>
            Зарабатывайте на продаже <div>теплых полов </div>
            <div>с маржинальностью до 100% <div>уже в первый месяц</div> </div>
            </div>
            <div className={s.contentSecondText}>
            <div className={s.contentSecondText2}>- Один партнер в одном городе </div>
            <div className={s.contentSecondText2}>- Среднемесячный оборот наших партнеров <span className={s.textOsob}>1.000.000р в месяц</span> </div>
            <div className={s.contentSecondText2}>- Проверенная бизнес-модель с 2010 года </div>
            <div className={s.contentSecondText2}>- Работает более <span className={s.textOsob}>80 партнеров</span> по России и СНГ</div>
            <div className={s.sdf}>
            <Link to="/content"><button className={s.contentBTN}>ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ + БИЗНЕС-ПЛАН</button></Link>
            </div>
            </div>
            
        </div>
        
        </div>
        
    );
}

export default Header;