import React from 'react'
import s from './Oplata.module.css'
import { Link, useNavigate } from "react-router-dom";




const Posts = (props) => {
const router = useNavigate()
return (
    
    <div className={s.post}>
        <div className={s.postContent}>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
            {props.post.body} 
        </div>
        </div>
        <div className={s.postBtn}>
        <button onClick={() => router(`/oplata/${props.post.id}`)} className={s.Btn}>Открыть</button>
        </div>
        <div className={s.postBtn}>
        <Link to='/final'> <button className={s.Btn}>Купить</button> </Link>
        </div>
    </div>
    
)
}

export default Posts
