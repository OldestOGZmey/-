import {React, useState }from 'react'
import s from './Oplata.module.css'
import Posts from './Posts'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'
const Oplata = () => {

    const [posts, setPosts] = useState([
    {
        id: 1,
        title: 'Данная оппаратура в Великом Новгороде(Частичное владение зданием и работниками)',
        body: '6.000.000'
    },
    {
        id: 2,
        title: 'Данная оппаратура в Москве(Полное владение зданием и работниками)',
        body: '24.000.000'
    },
    {
        id: 3,
        title: 'Данная оппаратура в Санкт-петербурге(Посик заведения работников)',
        body: '10.000.000'
    }
    ])



const [title, setTitle] = useState('')
const [body, setBody] = useState('')

const addNewPost = (e) => {
    e.preventDefault();
    const newPost = 
    {
    id: Date.now(),
    title,
    body
    }
    setPosts([...posts, newPost])
}

return (
    <div className={s.d}>
    <div className={s.Oplata}>
    
    <form>
        <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type='text'
        placeholder='Все о владении которое вы продаете'
        />
        <MyInput
        type='text' 
        placeholder='Цена'
        value={body}
        onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>


    <h1 style={{color: '#E91609', textAlign:'center', marginTop:'40px'}}>Выберите интересующую вас оплату и предложение или добавьте имеющийся бизнес</h1>
    {posts.map((post, index) =>
    <Posts number={index + 1} post={post} key={post.id}/>
    )}
    </div>
    </div>
)
}

export default Oplata
