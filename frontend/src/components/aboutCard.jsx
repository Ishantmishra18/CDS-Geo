import React from 'react'

const aboutCard = ({ title, description , img , stamp=[]   }) => {
  return (
    <div className="bout w-[40vw] p-5 rounded-lg bg-gray-100">
        <img src={img} alt="" className='w-full aspect-video rounded-lg object-cover'/>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mark flex mt-5">
            {stamp.map((s) => (
                <img src={`/stamp/unesco.png`} alt="" className='h-12 '/>
            ))}
        </div>
    </div>
  )
}

export default aboutCard