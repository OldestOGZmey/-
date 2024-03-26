import {React, useMemo, useState, useEffect }from 'react'

import s from './Oplata.module.css'
import PostForm from './PostForm'
import PostList from './PostList'
import MyButton from './UI/MyButton'
import axios from 'axios'
import MyInput from './UI/MyInput'
import MyModal from './UI/MyModal/MyModal'
import MySelect from './UI/MySelect'
const Oplata = () => {

    const [posts, setPosts] = useState([
    
    ])
    const [isPostsLoading, setIsPostsLoading] = useState(false)
    
    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout( async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setIsPostsLoading(false)
        }, 2300
        )
        
    }
    
    useEffect(() => {
        fetchPosts()
        
    }, []);

const [searchQuary, setSearchQuary] = useState('')

const [selectedSort, setSelectedSort] = useState('')




const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
}
const sortedPosts = useMemo(() => {
    if(selectedSort) {
        return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts

}, [selectedSort, posts])
        
        const sortPosts = (sort) => {
        setSelectedSort(sort)
        
}

const [modal , setModal] = useState(false)

const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuary))
}, [searchQuary, sortedPosts])

return (
    
    <div className={s.d}>

    <div className={s.Oplata}>
    <div className={s.modal}>
    <MyButton  onClick={() => setModal(true)}>
            Создать пост
    </MyButton>
    <MyModal visible={modal} setVisible={setModal}> 
    <PostForm create={createPost}/> 
    </MyModal>
    </div>

    <hr style={{margin: '15px 0'}}/>
    <div>
   
    <MyInput
        value={searchQuary.toLowerCase()}
        onChange={e => setSearchQuary(e.target.value)}
        placeholder='Поиск...'
    />
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
            defaultValue='Сортировка по:'
            options={[
                {value: 'title' , name: 'По названию'},
                {value: 'body' , name: 'По описанию'},
            ]}

        />
        
    </div>
            

            {isPostsLoading
                ? <h1> Идет загрузка...</h1>
                : <PostList posts={sortedAndSearchedPosts} title='Выберите интересующее вас приложение или добавьте новое'/>
            }
    </div>
    
    </div>
)
}

export default Oplata
