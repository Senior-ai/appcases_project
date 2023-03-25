import React, { useState } from 'react'

const AddPostsComp = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const style = {border: 'solid 2px black', padding: '3px'}
    const cancel = () => {
        props.setStatus('postsList')
    }
    const updateList = () => {
        const obj = {
            title: title,
            body: body
        };
        const newPosts = [...props.posts, obj]
        //const resp = await axios.put(postsUrl, obj)
        props.updatePostList(newPosts);
        props.setStatus('postsList')
    }
    return (
    <div>
        New Task - User {props.id}<br/> 
        <div style={style}>
            Title: <input type="text" onChange={(e) => setTitle(e.target.value)}></input><br/>
            Body: <input type="text" onChange={(e) => setBody(e.target.value)}></input><br/><br/>
            <button style={{backgroundColor: '#FFFACD'}} onClick={() => cancel()}>Cancel</button>
            <button style={{backgroundColor: '#FFFACD'}} onClick={() => updateList()}>Add</button>
        </div>
    </div>
  )
}
export default AddPostsComp