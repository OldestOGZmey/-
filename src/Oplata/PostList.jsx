import React from 'react'
import Posts from './Posts'
import s from './Oplata.module.css'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
const PostList = ({posts , title}) => {
return (
    <div>
    <h1 className={s.her}>{title}</h1>
    <TransitionGroup>
    {posts.map((post, index) =>
        <CSSTransition
            key={post.id}
            
            timeout={500}
            classNames="post"
            >
    <Posts number={index + 1}  post={post} key={post.id}/>
    </CSSTransition>
    )}
</TransitionGroup>
    </div>
)
}

export default PostList
