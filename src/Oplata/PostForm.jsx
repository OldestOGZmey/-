import React from 'react'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'
import { useState } from 'react'

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: '', id: ''})


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: 100 + 1
        }
        create(newPost)
        setPost({title: '', body: '', id: ''})
        
    }


return (
    <form>
        <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type='text'
        placeholder='Все о владении которое вы продаете'
        />
        <MyInput
        type='text' 
        placeholder='Описание'
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
        
    </form>
)
}

export default PostForm
