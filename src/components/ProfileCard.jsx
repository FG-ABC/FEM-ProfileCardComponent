import React from 'react'
import Avatar from '../assets/images/image-victor.jpg'

const ProfileCard = () => {
  return (
    <div id='Card' className='rounded-2xl grid grid-cols-1 grid-rows-1 h-96 p-0'>
        
        <div id='Background' className='w-full row-start-1 col-start-1'>
            <div id='Card-bg' className='w-full h-2/6 rounded-t-2xl'>

            </div>
        </div>

        <div id='Content' className='flex flex-col items-center row-start-1 col-start-1'>
            <img src={Avatar} className='w-28 aspect-square rounded-full'></img>
            <div className='pt-4 flex items-center'>
                <h2 className='text-2xl pr-3'>Victor Crest</h2>
                <h3 className='text-2xl'>26</h3>
            </div>
            <h3 className='pt-1'>London</h3>
            <hr className='w-full mt-6 mb-3'/>
            <div className='flex justify-between w-9/12 mr-3'>
                <div className='text-center'>
                    <h2 className='text-xl'>80K</h2>
                    <h3 className='text-md'>Followers</h3>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl'>803K</h2>
                    <h3 className='text-md'>Likes</h3>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl'>1.4K</h2>
                    <h3 className='text-md'>Photos</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileCard