import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Oplata/UI/Loader/Loader'
import MyButton from '../Oplata/UI/MyButton'
import s from './Final.module.css'
const Final = () => {

    const reload = () => {
        setTimeout(() => {
            <Loader/>
        }, 2000);
    }


return (




    <div className={s.container}>
    <Link to="/oplata"><MyButton onClick={reload()}><span className={s.reter}>⇦</span></MyButton></Link>
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

