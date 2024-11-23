import React from 'react'
import DarkModeHeader from '../components/DarkMode/DarkModeHeader'
import DarkModeContent from '../components/DarkMode/DarkModeContent'
import DarkModeFooter from '../components/DarkMode/DarkModeFooter'
import { ChangeMode } from '../context/DarkModeContext'
import { useState } from 'react'
import '../style/DarkMode.css'


const DarkMode = () => {
    let headerColorList = ["lightskyblue","black"]
    let contentColorList = ["white","black"]
    let footerColorList = ["lightgray","black"]
    let fontcolorlist = ["black","white"]
  
    const [isDark, setIsDark] = useState(0)
    console.log(isDark)
  
    return (
      <ChangeMode.Provider value = {{isDark, setIsDark}}>
        <div className='page'>
          <header className='header' style={{backgroundColor : headerColorList[isDark], color : fontcolorlist[isDark]}}>
            <DarkModeHeader  />
          </header>
          <div className='content' style={{backgroundColor : contentColorList[isDark], color : fontcolorlist[isDark]}}>
            <DarkModeContent />
          </div>
          <footer className='footer' style={{backgroundColor : footerColorList[isDark], color : fontcolorlist[isDark]}}>
            <DarkModeFooter isDark={isDark}/>
          </footer>
        </div>
      </ChangeMode.Provider>
    )
  }
  
  export default DarkMode