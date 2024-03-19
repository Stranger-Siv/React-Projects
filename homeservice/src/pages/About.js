import React from 'react'
import service from '../assets/service.avif'


const About = () => {
  return (
    <div className='flex flex-row pl-[135px] pr-[135px] mt-10'>
      <div className='border-2 w-[50%] rounded-lg mr-4'>
      <h2 className='text-red-500 text-2xl p-6'>How It Started</h2>
      <h1 className='text-white p-6 mt-[-20px] text-6xl'>Our Dream is <br/> Global Service <br/>Transformation</h1>
      <p className='text-richblack-100 p-6 mt-[-5px] '>The on-demand platform idea is used to provide personalized home services that comprise a long list of tasks including home cleaning service, home repair services, lawn care, and tech troubleshooting among others. Because a manual procedure will take a lot of time as you have to call a plumber, for instance, and wait for one’s arrival and even after paying him for his visit, you are not sure whether the problem has been solved properly or not. On-demand home services are making its place in the market due to the broad spectrum of opportunities along with reliability it provides to both the companies and the users. ODTap offers a mobile app for home service business owner, service provider and your customers to easily manage operations on one platform.</p>
      </div>
      <div className='border-2 w-[50%] rounded-lg mr-4 '>
        <img src={service} className='rounded-xl scale-90 mt-[10px]' />
        <div className='grid grid-rows-2 grid-flow-col text-white p-5 gap-5'>
        <div className='border-2 rounded-xl bg-slate-900 cursor-pointer'>
          <div className='text-3xl p-4'>2.5</div>
          <div className='text-xl p-4 mt-[-30px]'>Years Experience</div>
          </div>
          <div className='border-2 rounded-xl bg-slate-900 cursor-pointer'>
          <div className='text-3xl p-4'>50K</div>
          <div className='text-xl p-4 mt-[-30px]'>Service Delivered</div>
          </div>
          <div className='border-2 rounded-xl bg-slate-900 cursor-pointer'>
          <div className='text-3xl p-4'>30K+</div>
          <div className='text-xl p-4 mt-[-30px]'>Positive Reviews</div>
          </div>
          <div className='border-2 rounded-xl bg-slate-900 cursor-pointer'>
          <div className='text-3xl p-4'>4.8</div>
          <div className='text-xl p-4 mt-[-30px]'>Service Rating</div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
