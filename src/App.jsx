import React from 'react'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div id='App' className='grid grid-rows-1 grid-cols-1 w-full h-screen'>
      <div className='row-start-1 col-start-1 flex justify-between overflow-hidden'>
        <div id='bg-top' className='aspect-square'>
          <svg viewBox='0 0 978 978' xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="rotate(-135 489 489)" cx="489" cy="489" rx="489" ry="488" fill-rule="evenodd" opacity=".5"/></svg>
        </div>
        <div id='bg-bottom' className='aspect-square'>
          <svg viewBox='0 0 978 978' xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="scale(1 -1) rotate(45 1669.55 0)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".25"/></svg>
        </div>
      </div>
      <div className='z-50 row-start-1 col-start-1 w-full h-screen flex items-center justify-center'>
        <ProfileCard/>
      </div>
    </div>
  )
}
export default App
