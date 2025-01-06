import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer'


function User() {
    const [user,setUser] = useState(null)
    useEffect(()=>{
        fetchUser();
    },[]);

    const fetchUser =  async() =>{
        const data = await fetch("https://api.github.com/users/saurabh7pr");
        const json = await data.json();
        setUser(json)
        console.log(user)
    }
    

    if(user === null){
        return <Shimmer></Shimmer>
    }
  return (
   <div className='user-container'>  
     <div className='user-card'>
        <h1> {user.login} </h1>

        <h1>{user.url
            }</h1>
      
    </div>
   </div>
  )
}

export default User
