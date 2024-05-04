import {React, useEffect, useState} from 'react'
import { redirect, useFetcher, useParams } from 'react-router-dom'
import PostService from '../Api/PostServer'
import { useFetching } from '../Api/useFetcing'
import Loader from '../UI/Loader/Loader'
import s from '../Oplata.module.css'
import { Link, useNavigate } from "react-router-dom";
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async(id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
    })
    useEffect(() => {
    fetchPostById(params.id)
    }, [])


return (
    <div style={{background: 'radial-gradient(circle, rgba(133,12,12,1) 95%, rgba(255,255,255,1) 100%', height:'100vh', color:'white'}}>
    <h1 style={{textAlign:'center', padding: '30px 0 0 0 '}}>Вы открыли страницу поста с ID {params.id}</h1>
    {isLoading
    ? <div style={{display:'flex', justifyContent: 'center', marginTop: '200px', marginBottom: '2000px', background: 'radial-gradient(circle, rgba(133,12,12,1) 95%, rgba(255,255,255,1) 100%'}}><Loader/></div>
    : <div style={{border:'2px solid white', width:'800px', marginLeft:'auto', marginRight:'auto', marginTop:'200px', padding:'15px'}}><div><span style={{fontSyze:'40px', color:'white'}}>{post.id}.</span> <span style={{fontSyze:'40px', color:'white'}}>{post.title}</span></div><div>{post.body}</div> <div style={{margin: '10px 0 5px 0'}}>
        <Link to='/final'> <button className={s.Btn}>Купить</button> </Link>
        </div></div>
    }
    </div>
)
}

export default PostIdPage
