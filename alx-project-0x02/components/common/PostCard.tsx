import { PostProps } from '@/interfaces'
import React from 'react'

const PostCard: React.FC<PostProps> = ({title , content , userId}) => {
  return (
    <div className="flex flex-col gap-3 p-4 border rounded-md shadow-sm bg-white/20">
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p>{content}</p>
        <div>Posted by User ID: {userId}</div>
    </div>
  )
}

export default PostCard;
