import React from 'react'
import s from './Final.module.css'
const Final = () => {
return (
    <div className={s.container}>
    <div className={s.final}>
    <div className={s.ok}>
    <div>
        <input placeholder='Введите имя'/>
    </div>
    <div>
        <input placeholder='Введите фамилию'/>
    </div>
    <div>
        <input placeholder='Введите номер телефона'/>
    </div>
    <div>
        <input placeholder='Введите номер карты'/>
    </div>
    <div>
        <button type='submit' className={s.rete}>
            Купить <span>✅</span>
        </button>
    </div>
    </div>
    <div className={s.joc}>
    <div>СПАСИБО</div> Специалист свяжется с вами в рабочее время
    </div>
    </div>
    </div>

)
}

export default Final

