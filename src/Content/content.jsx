import React from 'react'
import { Link } from 'react-router-dom'
import s from './content.module.css'


const Content = () => {
return (
    <div className={s.content}>
    <div>
    <div className={s.contentText}>
    <div>Уникальный</div>
    <div className={s.contentTextRed}>запатентованный продукт </div>
    <div>СО СПРОСОМ В ЛЮБОЙ СЕЗОН</div>
    </div>
    <div className={s.secondContentText}>
    <div>Электро-водяной пол <span>XL PIPE</span></div>
    <div className={s.zaebal}>Это выгодная и более экологичная альтернатива <div>стандартным системам отопления – твердотопливным,</div> электрическим и газовым котлам. </div>
    <div className={s.secondContentText2}>Быстрый монтаж, легкая эксплуатация и надежное <div>корейское качество!</div></div>
    <Link to='/tovar'><div className={s.Bolshe}>Купить XL PIPE</div></Link>
    </div>
    </div>
    <div className={s.photoFlag}> 
    <div className={s.secondPhoto}>

    </div>
    <div className={s.thirdPhoto}>

    </div>
    </div>
    </div>
)
}

export default Content
