import React, { useState } from 'react'
import { useContext } from 'react'
import { ChangeMode } from '../../context/DarkModeContext'

const DarkModeFooter = ({ isDark}) => {
  const { setIsDark } = useContext(ChangeMode)

  return (
    <div>
      <button onClick={() => {
        setIsDark(Math.abs(isDark - 1))
      }}>Dark Mode</button>
    </div>
  )
}

export default DarkModeFooter