import React from 'react'

function Card(props) {
    return (
        <div className='bg-[#202024] flex flex-col justify-center items-center w-auto py-5 px-10 gap-5 rounded-md border border-zinc-700 min-h-[350px]'>
            <div className='bg-zinc-700 h-[80px] w-[80px] flex justify-center items-center rounded-full'>
                <img src={props.icon} width={30} height={30} alt="" />
                
            </div>
            <div className='border-b font-semibold text-zinc-200'>{props.title}</div>
            <div className='text-sm text-center'>{props.description}</div>
        </div>
    )
}

export default Card