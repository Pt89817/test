import React from 'react'
import { Send, BadgeCheck, AppWindow, Annoyed } from "lucide-react"
const Card = ({name,myimg,caption,content, following, follower}) => {
  return (
    <div className='child'>
      <div className='img-top'>
        <img src={myimg} alt="" height={200} width="auto" />
        <div className='icons'>
          <Send size={20} color="#484848" strokeWidth={3}  />
          <span style={{margin:"0px 5px"}}><AppWindow size={20} color="#484848" strokeWidth={3} /></span>
          <Annoyed size={20} color="#484848" strokeWidth={3} />
        </div>
      </div>

      <div className="bottom">
        <button>Follow</button>
        <h2>{name} <BadgeCheck size={14} color="#000fdb" strokeWidth={3} /> </h2>
        <p className='caption'>{caption}</p>
        <p>{content}</p>
        <div className='social'>
          <span>{following} Following</span>
          <span>{follower} Follower</span>
        </div>
      </div>
    </div>
  )
}

export default Card