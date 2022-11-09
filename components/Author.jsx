import React from 'react'
import Image from 'next/image'


const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg dark:bg-slate-800 bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
            alt={author.name}
            unoptimized
            height="100px"
            width="100px"
            className='align-middle rounded-full'
            src={author.photo.url}
        />
        </div>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
    </div>
    // <figure class="md:flex lg:flex xl:flex bg-slate-100 rounded-xl p-8 md:p-0 lg:p-0 xl:p-0 dark:bg-slate-800">
    //   <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none lg:w-64 lg:h-auto lg:rounded-none xl:w-128 xl:h-auto xl:rounded-none xl:mx-0 rounded-full mx-auto"
    //     src={author.photo.url} 
    //     alt={author.name} 
    //     width="384" 
    //     height="512" 
    //   />
    //   <div class="pt-6 md:p-8 text-center md:text-left lg:text-left xl:text-left lg:p-12 xl:p-12 space-y-4">
    //     <blockquote>
    //       <p class="text-lg font-medium text-white">
    //         {author.bio}
    //       </p>
    //     </blockquote>
    //     <figcaption class="font-medium">
    //       <div class="text-sky-500 dark:text-sky-400">
    //         {author.name}
    //       </div>
    //     </figcaption>
    //   </div>
    // </figure>
  )
}

export default Author