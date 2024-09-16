import { getOnePost } from '@/app/lib/data/blog/blog.data';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { FC } from 'react'

export const dynamic = "force-dynamic"

export type TGenerateMetadataProps = {
  params: { postName: string };
};

// export async function generateMetadata(
//   { params }: { params: { postName: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const { postName } = params;
//   // let post

//   // if (!postName.includes('-') && postName.length == 24) {
//   //   const title: string = await getTitlePost(postName)
//   //   const titlepath = title.replaceAll(' ', '-')
//   //   post = await getOnePost(titlepath);
//   // } else {
//   // const post = await getOnePost(postName);
//   // }

//   // return {
//   //   title: {
//   //     absolute: post.title
//   //   },
//   //   description: post.tldr,
//   //   metadataBase: new URL("https://www.weby.team"),

//   //   openGraph: {
//   //     title: post.title,
//   //     description: post.tldr,
//   //     url: `https://www.weby.team/blog/${post.title.replaceAll(" ", "-")}`,
//   //     siteName: 'Weby Team',
//   //     images: [{
//   //       url: post.coverImg,
//   //       width: 730,
//   //       height: 483,
//   //       alt: `איור של כתבה ${post.title}`
//   //     }],
//   //   }
//   // }
// }

interface IPagePost {
  params: { postName: string }
}

const Page: FC<IPagePost> = async ({ params }) => {
  const { postName } = params;
  console.log(postName)
  const uri = decodeURIComponent(decodeURIComponent(postName)).replaceAll("-", " ")

  // const uri = await decodeURIComponent(postName).replaceAll("-", " ");
  const post = await getOnePost(uri)

  // let post

  // if(!postName.includes('-') && postName.length == 24){
  //   const title: string = await getTitlePost(postName)
  //   post = await getOnePost(titlepath)
  //   return post
  // }

  // const title = decodeURI(postName);

  // console.log(`postName line 56 page.tsx ${postName}`)
  //   let post

  //   if (!postName.includes('-') && postName.length == 24) {
  //     const title: string = await getTitlePost(postName)
  //     const titlepath = title.replaceAll(' ', '-')
  //     post = await getOnePost(titlepath)
  //   } else {
  //     post = await getOnePost(postName)
  //   }

  if (!post || Object.keys(post).length === 0) return notFound()

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