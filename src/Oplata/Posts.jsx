import React from 'react'
import s from './Oplata.module.css'
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
        <a href='/final'> <button className={s.Btn}>Купить</button> </a>
        </div>
    </div>
    
)
}

export default Posts
