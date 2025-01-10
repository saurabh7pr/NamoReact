import React, { useState } from 'react'
import { useEffect } from 'react'

const useOnlineStatus = () => {
  const[onlineStatus,setonlineStatus] = useState(true);

  useEffect (()=>{
    window.addEventListener("offline",()=>{
        setonlineStatus(false)
    })

    window.addEventListener("online",() =>{
        setonlineStatus(true)
    })
  })




  return onlineStatus
}

export default useOnlineStatus
