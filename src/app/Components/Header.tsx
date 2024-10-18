import React from 'react'
import Link from 'next/link'
const Header = () => {

    const menu =[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:1,
            name:'Products',
            path:'/products'
        }
    ]

  return (
    <div className='flex items-center 
    justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
            <nav>
            <ul className='menu md:flex gap-8 hidden'>
                {menu.map((item,index)=>(
                    <Link href={item.path} key={index}>
                    <li className='hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out'>{item.name}</li>
                    </Link>
                ))}
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
