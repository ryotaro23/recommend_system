import React from 'react'
import { useDispatch } from 'react-redux'
import { Post, addReaction } from './postsSlice'

export type ReactionName = 'happy' | 'sad' | 'love' | 'angry';

const reactionEmoji :Record<ReactionName, string> = {
  happy: '😆',
  sad: '😱',
  love: '😍',
  angry: '😡',
}

export const ReactionButtons = ({ post }:{post:Post}) => {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="reaction-button"        onClick={() =>dispatch(addReaction( post.id, name as ReactionName))
      }>
        {emoji} 
        {post.reactions[name as ReactionName]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}