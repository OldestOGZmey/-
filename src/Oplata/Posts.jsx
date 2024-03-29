import React from 'react'
import s from './Oplata.module.css'
import { Link } from "react-router-dom";
const Posts = (props) => {
return (
    
    <div className={s.post}>
        <div className={s.postContent}>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
            {props.post.body} 
        </div>
        </div>
        <div className={s.postBtn}>
        <Link to='/final'> <button className={s.Btn}>Купить</button> </Link>
        </div>
    </div>
    
)
}

export default Posts
