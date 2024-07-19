import { getOnePost } from '@/app/lib/data/blog/blog.data';
import React, { FC } from 'react'

interface IPagePost {
    params: { postId: string }
}

const Page:FC<IPagePost> = async ({params}) => {
    const {postId} = params;
    const post = await getOnePost(postId)
    
  return (
    <div>{post?.title}</div>
  )
}

export default Page