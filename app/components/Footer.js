import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='p-10'>
      <h1 className='text-center text-lg'>Code is here <Link className='text-blue-400' href={"https://github.com/mahdeehsn/artshop"}>github/mahdeehsn </Link></h1>
    </div>
  )
}

export default Footer