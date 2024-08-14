// "use client"

import { getOnePost } from '@/app/lib/data/blog/blog.data';
import React, { FC } from 'react'
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface IPagePost {
  params: { postName: string }
}

const Page: FC<IPagePost> = async ({ params }) => {
  const { postName } = params;
  const post = await getOnePost(postName)

  return (
    <div>{post?.title}</div>
  )
}

export default Page