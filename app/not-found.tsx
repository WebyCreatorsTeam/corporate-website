'use client'

import { redirect, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const pathname = usePathname()

  if (pathname.includes("/blog/post/") && pathname.replace('/blog/post/', '').length == 24 ) {
    const pathText = pathname.replace('/blog/post/', '')
    return redirect('/blog/' + pathText)
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <p>העמוד לא נמצא.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-purple-800 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >חזור לעמוד הראשי</Link>
    </main>
  );
}