import {React, useMemo, useState, useEffect }from 'react'

import s from './Oplata.module.css'
import PostForm from './PostForm'
import PostList from './PostList'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'
import MyModal from './UI/MyModal/MyModal'
import MySelect from './UI/MySelect'
import Loader from './UI/Loader/Loader'
import PostService from './Api/PostServer'
import { useFetching } from './Api/useFetcing'
import { getPageCount, getPagesArray } from '../utils/pages'
const Oplata = () => {
    

    
    
    let pagesArray = getPagesArray(11);
    
    const [posts, setPosts] = useState([
    
    ])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    
    const [fetchPosts, isPostsLoading, postError] = useFetching(async(event) => {

        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        event.preventDefault();
        
        
        
    })
    
    
    useEffect(() => {
        
        fetchPosts()
        
    }, [page]);

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


const changePage = (page) => {
    setPage(page)
}


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
            {postError && 
            <h1>Произошла ошибка ${postError}<Loader/></h1>

            }
            

            {
                isPostsLoading
            
                ?  <div style={{display:'flex', justifyContent: 'center', marginTop: '200px', marginBottom: '2000px'}}><Loader/></div>
                :<PostList posts={sortedAndSearchedPosts} title='Выберите интересующее вас приложение или добавьте новое'/>
            }
            <div className={s.page__wrapper}>
            {pagesArray.map(p => 
            <span 
            className={page === p ?  s.page__current : s.page}
            onClick={() => changePage(p)}
            key={p + 1}
            >
                {p}
            </span>
            
            )}
            </div>
    </div>
    
    
    </div>
)
}

export default Oplata
