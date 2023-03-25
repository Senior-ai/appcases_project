import {useEffect, useState} from 'react'
import axios from 'axios'
import TodosComp from './todosComp'
import PostsComp from './postsComp'
import AddTodosComp from '../createComps/AddTodoComp'
import AddPostsComp from '../createComps/AddPostsComp'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
const todosUrl = 'https://jsonplaceholder.typicode.com/todos'
const MissionsComp = (props) => {
  const missionStyle = {
    width: '300px',
    maxHeight: '550px',
    padding: '10px',
    margin: '10px auto',
    float: 'center'
  }
  const compStyle = {border: '1px solid black', padding: '10px'}
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todosStatus, setTodosStatus] = useState(props.status);
  const [postsStatus, setPostsStatus] = useState(props.postStatus);
  useEffect(() => {
    const fetchData = async () => {
      const {data: postsData} = await axios.get(`${postsUrl}?userId=${props.id}`);
      setPosts(postsData);
      const {data: todosData} = await axios.get(`${todosUrl}?userId=${props.id}`);
      setTodos(todosData);
    }
    fetchData();
  }, []);

  return (
    <div style={missionStyle}>
      Todos - User {props.id}
      <button style={{float:'right', backgroundColor:'#FFFACD'}} onClick={() => setTodosStatus('addTodos')}>Add</button><br/>
      <div style={compStyle}>
      { todosStatus === 'todosList'? (todos.map(todo => {return(
          <TodosComp key={todo.id} todo={todo}></TodosComp>)
        })) : todosStatus === 'addTodos'?
         (<AddTodosComp setStatus={setTodosStatus} updateList={setTodos} todos={todos}></AddTodosComp>) : ('') 
      }<br/>
      </div><br/>
      Posts - User {props.id}
      <button style={{float:'right', backgroundColor:'#FFFACD'}} onClick={() => setPostsStatus('addPosts')}>Add</button><br/>
      <div style={compStyle}>
      { postsStatus === 'postsList'? (posts.map(post => {return(
        <><PostsComp key={post.id} post={post}></PostsComp><br/></>
        )})) : postsStatus === 'addPosts'?
        (<AddPostsComp setStatus={setPostsStatus} updatePostList={setPosts} posts={posts}></AddPostsComp>) : ('')
      }
      </div>
    </div>
  )
}
export default MissionsComp