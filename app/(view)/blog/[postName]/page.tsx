import { getOnePost } from '@/app/lib/data/blog/blog.data';
import Image from 'next/image';
import React, { FC } from 'react'

export const dynamic = "force-dynamic"

interface IPagePost {
  params: { postName: string }
}

const Page: FC<IPagePost> = async ({ params }) => {
  const { postName } = params;
  const post = await getOnePost(postName)

  if (!post || Object.keys(post).length === 0) return <>null</>

  return (
    <article className='elementWidth post'>
      <div>
        <Image className="hidden md:block" src={post.coverImg} alt={`איור פוסט בנושא ${post.title}`} width={960} height={540} />
        <Image className="block md:hidden" src={post.smallImg} alt={`איור פוסט בנושא ${post.title}`} width={320} height={180} />
      </div>
      <div className='post__details'>
        <p>
          פורסם: {" "}
          {new Date(post.createdAt).toLocaleDateString("en-GB", { year: "numeric", month: "numeric", day: "numeric" })}
        </p>
      </div>
      <h1>{post.title}</h1>
      <div className='post__tldr'>
        <h2>TL;DR</h2>
        <p>{post.tldr}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </article>
  )
}

export default Page