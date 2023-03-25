import React from 'react'

const postsComp = (props) => {
  const style = {border: 'solid 2px purple', padding: '3px'}
  return (
    <div style={style}>
      <b>Title:</b> {props.post.title} <br/>
      <b>Body:</b> {props.post.body} <br/>
    </div>
  )
}
export default postsComp