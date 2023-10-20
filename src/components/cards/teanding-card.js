import React from 'react'
import Image from 'next/image'
export default function TeandingCard({ cetagorys, image }) {
    return (
        <div className='grid justify-items-center'>
            <div className='grid grid-cols-3 mb-8 gap-6'>

                {
                    cetagorys.map(cetagory => (
                        <div className='text-sm text-center font-semibold  grid gap-2 justify-items-center'>
                            <img width={50} height={50} src={cetagory.image} alt={cetagory.name} />
                            <h4>{cetagory.name}</h4>
                        </div>
                    ))
                }

            </div>
            <img src={image} alt=''/>
        </div>
    )
}
