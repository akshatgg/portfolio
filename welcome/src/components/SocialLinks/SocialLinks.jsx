import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                 LinkedIn <FaLinkedin size={32}/>
                </>
            ),
            href:"https://www.linkedin.com/in/akshat-gupta-137885256/",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                 GitHub <FaGithub size={32}/>
                </>
            ),
            href:"https://github.com/akshatgg",
           
        },
        {
            id:3,
            child:(
                <>
                 Mail <HiOutlineMail size={32}/>
                </>
            ),
            href:"mailto:akshatg9636@gmail.com",
            
        },
        {   
            id:4,
            child:(
                <>
                 Resume <BsFillPersonLinesFill size={32}/>
                </>
            ),
            href:"https://drive.google.com/file/d/1zps1dShW8fBeuaRooTXtpoJUtOnk-Xvs/view?usp=sharing",
            style:'rounded-br-md',
            download: true,
        },
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-10 '>
      <ul>
        {links.map(({id,child,href,style,download})=>(

<li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-[#1c1641] ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " +style}>

<a href={href} className='flex justify-between items-center text-white w-full'
 download={download}
 target='_blank'
 rel="noreferrer"
 >
{child}
</a>
</li>
        ))}

          
       
      </ul>
    </div>
  )
}


export default React.memo(SocialLinks);
















