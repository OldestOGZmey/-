import React from "react";
import s from "./Register.module.css"
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState("");
    const [passwordDirty, setPasswordDirty] = useState("");
    const [emailError, setEmailError] = useState("Почта не может быть пустой");
    const [passwordError, serPassworError] = useState("Пароль не может быть пустой");
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(' Неккоректная почта')
        } else {
            setEmailError('')
        }
    }
    
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 16) {
        serPassworError('Пароль не может быть меньше 3 символов и больше 16')
        if (!e.target.value) {
            serPassworError('Пароль не может быть пустой')
        }
        } else {
            serPassworError('')
        }
    }


    const blurHandle = (e) => {
    switch (e.target.name) {
        case "email": 
            setEmailDirty(true)
                break
        case "password":
            setPasswordDirty(true)
                break
    }
    }

    const [visible, setVisible] = useState(false)

    return ( 
    
        <div className={s.container}>
        
        <div className={s.text}>
        <div className={s.contentText}>
        Заполните форму
        </div>
        <div className={s.contentText2}>
        и наш менеджер перезвонит вам в рабочее время
        </div>
        </div>
        <div className={s.contentLogik}>


        {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandle(e)} name="email" type="text" placeholder="Введите вашу почту" className={s.nameInput}/>


        
        {(passwordDirty && passwordError) && <div style={{color: "red", margin: '10px 0 0 0'}}>{passwordError}</div>}
        <div className={s.vesibleChild}>
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandle(e)} id='ret' name="password" type={visible ? "text" : "password"} placeholder="Введите ваш пароль" className={s.phoneInput}/>
        <div className={s.visible} onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
        </div>
        </div>



        <Link to="/header"><button disabled={!formValid} type="submit" className={s.button}>Войти</button></Link>
        </div>
        <div className={s.footerText}>
            Отправляя заявку, вы соглашаетесь на обработку персональных <div>данных в соответствии с <span className={s.specialFooterText}>политикой конфиденциальности</span></div>
        </div>
        </div>
    );
}

export default Register;